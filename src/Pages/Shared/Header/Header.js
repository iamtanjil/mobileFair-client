import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assest/logo.png';
import { AuthProvider } from '../../../Contexts/AuthContext';
import useAdmin from '../../../Hooks/UseAdmin/UseAdmin';
import useSeller from '../../../Hooks/UseSeller/UseSeller';
import useUser from '../../../Hooks/UseUsers/useUsers';

const Header = () => {
    const { user, logOut } = useContext(AuthProvider)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isUser] = useUser(user?.email);
    const navItems = <>
        <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                }
            >
                Home
            </NavLink>
        </li>
        <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                }
            >
                About
            </NavLink>
        </li>
        <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
            <NavLink
                to='/blog'
                className={({ isActive }) =>
                    isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                }
            >
                Blog
            </NavLink>
        </li>
        {
            user && <>
                <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
            </>
        }

    </>
    const navItemsMobile = <>
        <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                }
            >
                Home
            </NavLink>
        </li>
        <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
            <NavLink
                to='/blog'
                className={({ isActive }) =>
                    isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                }
            >
                Blog
            </NavLink>
        </li>
        {
            user && <>
                <li className=' hover:bg-orange-600 hover:text-white hover:rounded-md '>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive ? 'bg-orange-600 text-white rounded-md' : undefined
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
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

            </>
        }

    </>
    return (
        <div className="navbar bg-base-100 shadow-lg mb-5 rounded-b-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItemsMobile
                        }
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-14' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MobileFair.Com</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={logOut} className="btn bg-orange-600 text-white hover:bg-orange-700 border-none">LogOout</button> :
                        <Link to='/login' className="btn bg-orange-600 text-white hover:bg-orange-700 border-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;