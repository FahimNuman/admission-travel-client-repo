import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Service/AddService";
import ServiceAll from "../Pages/Service/ServiceAll";
import ServiceDetails from "../Pages/Service/ServiceDetails";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            }
            ,
            {
                path:'/ServiceAll',
                element:<ServiceAll></ServiceAll>,
                
            }
            ,
            {
                path:'/ServiceDetails',
                element:<ServiceDetails></ServiceDetails>
                
            }
            ,
            {
                path:'/AddService',
                element:<AddService></AddService>
                
            }
        ]
    }
])

export default router;