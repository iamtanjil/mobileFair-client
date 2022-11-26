import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Feedback from "../../Pages/Dashboard/Feedback/Feedback";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProducts.js/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/products/:category',
            element: <PrivateRoute><Products></Products></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.category}`)
        },
    ]
},
{
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        {
            path:'/dashboard/alluser',
            element: <PrivateRoute><AllUser></AllUser></PrivateRoute>,
        },
        {
            path:'/dashboard/myorders',
            element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
            path:'/dashboard/addproducts',
            element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },
        {
            path:'/dashboard/myproducts',
            element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        },
        {
            path:'/dashboard/feedback',
            element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
        },
    ]
}
]);


export default router