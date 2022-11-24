import React, { useContext, useState } from 'react';
import loginImg from '../../assest/login.png';
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';

const Login = () => {
    const {signIn} = useContext(AuthProvider);
    const [loginError, setLoginError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogin = data => {
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
        })
        .catch(err => {
            setLoginError(err.message)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <h2 className="text-3xl text-center mt-5">Login</h2>
                    <form onSubmit={handleSubmit(handelLogin)} className=' card-body'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Email</span>
                            </label>
                            <input {...register("email",
                                {
                                    required: 'Enter Your Email'
                                })}
                                type="email" name='email' placeholder="Email"
                                className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600 mt-2'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Password</span>
                            </label>
                            <input {...register("password",
                                {
                                    required: "Password Is Required",
                                    minLength: { value: 6, message: 'Password should be 6 digits.' }
                                })}
                                type="password" name='password' placeholder="Passoword"
                                className="input input-bordered w-full" />
                            <div className='flex justify-between items-center mt-3'>
                                <p className='text-lg'>Login As</p>
                                <select className="select select-bordered select-sm w-[40]">
                                    <option disabled selected>Select Role</option>
                                    <option>Seller Account</option>
                                </select>
                            </div>
                            {errors.password && <p className='text-red-600 '>{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-orange-600 text-white hover:bg-orange-700 border-none mb-3 mt-7' value='Login' type="submit" />
                        <p className='text-lg text-center mb-2'>New To MobailFair? <Link to='/signup' className='text-orange-600'>Sign Up</Link> now.</p>
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    <div className="divider">OR</div>
                    <button className='btn bg-orange-600 text-white hover:bg-orange-700 border-none mb-3'><FaGoogle className='text-white text-4xl'></FaGoogle></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;