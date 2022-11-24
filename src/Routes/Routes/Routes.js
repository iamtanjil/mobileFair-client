import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
    ]
},
{
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        {
            path:'/dashboard/alluser',
            element: <AllUser></AllUser>
        },
        {
            path:'/dashboard/myorders',
            element: <MyOrders></MyOrders>
        },
    ]
}
]);


export default router