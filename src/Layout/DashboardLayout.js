import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthProvider } from '../Contexts/AuthContext';
import useAdmin from '../Hooks/UseAdmin/UseAdmin';
import useSeller from '../Hooks/UseSeller/UseSeller';
import useUser from '../Hooks/UseUsers/useUsers';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isUser] = useUser(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content rounded-t-md">
                        {
                            isAdmin &&
                            <>
                                <li>
                                    <NavLink
                                        to='/dashboard/myorders'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Manage Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/alluser'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        All User
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/addproducts'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Add Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/myproducts'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        My Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/feedback'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Feedback
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/orders'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/sellers'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        All Seller
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li>
                                    <NavLink
                                        to='/dashboard/myorders'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Manage Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/myproducts'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        My Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/addproducts'
                                        className={({ isActive }) =>
                                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                        }
                                    >
                                        Add Products
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            isUser &&
                            <li>
                                <NavLink
                                    to='/dashboard/orders'
                                    className={({ isActive }) =>
                                        isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;