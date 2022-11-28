import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Feedback from "../../Pages/Dashboard/Feedback/Feedback";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProducts.js/MyProduct";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Payments from "../../Pages/Dashboard/Payments/Payments";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
        {
            path:'/dashboard/alluser',
            element: <PrivateRoute><AdminRoutes><AllUser></AllUser></AdminRoutes></PrivateRoute>,
        },
        {
            path:'/dashboard/sellers',
            element: <PrivateRoute><AdminRoutes><AllSeller></AllSeller></AdminRoutes></PrivateRoute>,
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
        {
            path:'/dashboard/orders',
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
            path:'/dashboard/payments/:id',
            element: <PrivateRoute><Payments></Payments></PrivateRoute>,
            loader: ({params}) =>  fetch(`http://localhost:5000/payments/${params.id}`)
        },
    ]
}
]);


export default router