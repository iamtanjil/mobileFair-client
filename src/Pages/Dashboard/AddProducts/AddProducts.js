import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    const handelAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
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
                            <input {...register("product-name",
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
                            <input {...register("productName",
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
                                className="input input-bordered w-full" />
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
                                <span className="text-lg">Time</span>
                            </label>
                            <input {...register("time",
                                {
                                    required: "Time is Required",
                                })}
                                type="text" name='time' placeholder="Time"
                                className="input input-bordered w-full" />
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