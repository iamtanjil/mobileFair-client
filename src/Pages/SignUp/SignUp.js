import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import loginImg from '../../assest/login.png';
import { AuthProvider } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/UseToken/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { createUser, updateUser } = useContext(AuthProvider);
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail)
    if (token) {
        navigate('/')
    }

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    const handelSignUp = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                createUser(data.email, data.password)
                    .then(result => {
                        const userInfo = {
                            displayName: data.name
                        };
                        updateUser(userInfo)
                            .then(() => {
                                addDataToDB(data.email, data.name, imgData.data.url)
                            })
                    })
            })


        const addDataToDB = (email, name, img) => {
            const user = { email, name, img , role: 'user'}
            fetch('https://assignment-12-server-mu.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setCreatedUserEmail(email);
                        toast.success('SignUp Successful.');
                        reset();
                    }
                })
        }
    };

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-3xl text-center mt-5">Sign Up</h2>
                    <form onSubmit={handleSubmit(handelSignUp)} className='card-body mx-auto p-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-lg">Name</span>
                            </label>
                            <input {...register("name",
                                {
                                    required: 'Enter Your Name'
                                })}
                                type="text" name='name' placeholder="Name"
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600 mt-2'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-lg">Email</span>
                            </label>
                            <input {...register("email",
                                {
                                    required: 'Enter Your Email'
                                })}
                                type="email" name='email' placeholder="Email"
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600 mt-2'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-lg">Password</span>
                            </label>
                            <input {...register("password",
                                {
                                    required: "Password Is Required",
                                    minLength: { value: 6, message: 'Password should be 6 digits.' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password should be Uppercase, Lowercase, and Special Charactor' }
                                })}
                                type="password" name='password' placeholder="Passoword"
                                className="input input-bordered w-full max-w-xs" />
                            <span className="label-text mt-2"><a href="./">Forget password?</a></span>
                            {errors.password && <p className='text-red-600 '>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Upload Your Photo</span>
                            </label>
                            <input {...register("image",
                                {
                                    required: 'Upload Photo'
                                })}
                                type="file" name='image'
                                className="file-input file-input-bordered file-input-warning w-full" />
                        </div>
                        <input className='btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3' value='Sign Up' type="submit" />
                        <p className='text-lg text-center mb-5'>Already Have An Account? <Link to='/login' className='text-orange-600'>Login</Link> now.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;