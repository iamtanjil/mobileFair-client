import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProvider } from '../../../Contexts/AuthContext';
import toast from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user,loading, setLoading} = useContext(AuthProvider)

    if(loading){
        return <Spinner></Spinner>
    }

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    const date = new Date();
    const today = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    const time = date.getHours() + ':' + date.getMinutes();

    const handelAddProduct = data => {
        setLoading(true);
        const image = data.productImage[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(ImageData => {
            const productName = data.productName;
            const productPrice = data.productPrice;
            const originalPrice = data.originalPrice;
            const location = data.location;
            const durationOfUse = data.durationOfUse;
            const brandName = data.brandName;
            const mobileNumber = data.mobileNumber;
            const productImage = ImageData.data.url;

            const product = {
                productName,
                productPrice,
                originalPrice,
                location,
                durationOfUse,
                brandName,
                productImage,
                publishedDate: today,
                publishedTime: time,
                sellerName: user.displayName,
                sellerEmail: user.email,
                mobileNumber
            };
            saveToDb(product);
        })
    }

    const saveToDb = data => {
        fetch('https://assignment-12-server-mu.vercel.app/products', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product Successfully Added');
                reset();
                setLoading(false);
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-100 p-7">
            <div className="flex-shrink-0 w-full shadow-2xl rounded-md bg-base-100">
                <h2 className="text-3xl text-center mt-5">Add A Product</h2>
                <form onSubmit={handleSubmit(handelAddProduct)} className='card-body mx-auto p-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Product Name</span>
                            </label>
                            <input {...register("productName",
                                {
                                    required: 'Enter Product Name'
                                })}
                                type="text" name='productName' placeholder="Product Name"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Product Price</span>
                            </label>
                            <input {...register("productPrice",
                                {
                                    required: 'Enter Product Price'
                                })}
                                type="text" name='productPrice' placeholder="Product Price"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Original Price</span>
                            </label>
                            <input {...register("originalPrice",
                                {
                                    required: 'Enter Original Price'
                                })}
                                type="text" name='originalPrice' placeholder="Original Price"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Location</span>
                            </label>
                            <input {...register("location",
                                {
                                    required: 'Enter Your Location'
                                })}
                                type="text" name='location' placeholder="Location"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Duration of Use</span>
                            </label>
                            <input {...register("durationOfUse",
                                {
                                    required: 'Enter Duration of use'
                                })}
                                type="text" name='durationOfUse' placeholder="Duration of Use"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Seller Name</span>
                            </label>
                            <input {...register("SellerName",
                                {
                                    required: "Seller Name is Required",
                                })}
                                type="text" name='sellerName' placeholder="Seller Name"
                                className="input input-bordered w-full"
                                defaultValue={user.displayName} readOnly />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Brand Name</span>
                            </label>
                            <input {...register("brandName",
                                {
                                    required: "Brand Name is Required",
                                })}
                                type="text" name='brandName' placeholder="Brand Name"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg">Mobile Number</span>
                            </label>
                            <input {...register("mobileNumber",
                                {
                                    required: "Mobile Number is Required",
                                })}
                                type="text" name='mobileNumber' placeholder="Mobile Number"
                                className="input input-bordered w-full" 
                                />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg">Upload Product Photo</span>
                        </label>
                        <input {...register("productImage",
                            {
                                required: 'Upload Photo'
                            })}
                            type="file" name='productImage'
                            className="file-input file-input-bordered file-input-warning w-full" />
                    </div>
                    <input className='btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3' value='Add Product' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;