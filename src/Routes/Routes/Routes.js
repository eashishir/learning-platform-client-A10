import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import FaqPage from "../../Pages/FAQ/FaqPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageError from "../../Pages/PageError/PageError";
import PrimiumPage from "../../Pages/Premium/PrimiumPage";
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
                element:<Category></Category>,
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
            {
                path: '/blogs',
                element:<Blog></Blog>
              },

           {
            path:'/category/premium/:id',
            element:<PrivateRoute> <PrimiumPage></PrimiumPage> </PrivateRoute>,
            loader:({params}) => fetch (`https://my-assignment-server-10.vercel.app/js-category/${params.id}`)
           },
           {
            path:'category',
            element:<Category></Category>
           },
           {
            path:'/faq',
            element:<FaqPage></FaqPage>
           }
        ]
        
    },
    { path: '*', element: <PageError></PageError> },

])