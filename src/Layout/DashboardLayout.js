import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content rounded-t-md">
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
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;