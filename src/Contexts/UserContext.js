import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

 export const AuthContext = createContext();
        const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);

    };

   

    useEffect (() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe ();
    },[])

    const authInfo = {user,loading, createUser,LogIn,LogOut,googleProviderLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;