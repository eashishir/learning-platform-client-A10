import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageError from "../../Pages/PageError/PageError";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/' ,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Category></Category></PrivateRoute>,
                loader:({params}) => fetch (`https://my-assignment-server-10.vercel.app/js-category/${params.id}`)
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader:() =>fetch('https://my-assignment-server-10.vercel.app/courses')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
        
    },
    { path: '*', element: <PageError></PageError> },

])