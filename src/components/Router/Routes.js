import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Service/AddService";
import Service from "../Pages/Service/Service";
import ServiceAll from "../Pages/Service/ServiceAll";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Login from "../Pages/SingIn/Login";
import SingUp from "../Pages/SingIn/SingUp";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/',
                element:<Service></Service>,
                loader: () => fetch(`http://localhost:5000/service`)
            }
            ,
            {
                path:'/ServiceAll',
                element:<ServiceAll></ServiceAll>,
                loader: () => fetch(`http://localhost:5000/service`)
            }
            ,
            {
                path:'/ServiceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
                
            }
            ,
            {
                path:'/AddService',
                element:<AddService></AddService>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singUp',
                element:<SingUp></SingUp>
            }
        ]
    }
])

export default router;