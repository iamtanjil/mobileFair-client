import React from 'react';

const ProductsCard = ({product, setBooking}) => {
    return (
        <div  className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-96 h-96' src={product.productImage} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.sellerName}</h2>
                            <h3 className="text-xl">Name: <strong>{product.productName}</strong></h3>
                            <h3 className="text-lg">Price: <strong>{product.productPrice}</strong>TK.</h3>
                            <h3 className="text-lg">Original Price: <strong>{product.originalPrice}</strong>TK.</h3>
                            <h3 className="text-sm">Used: <strong>{product.durationOfUse}</strong></h3>
                            <h3 className="text-sm">Location: <strong>{product.location}</strong></h3>
                            <h3 className="text-sm">Contact: <strong>{product.mobileNumber}</strong></h3>
                            <h3 className="text-sm">Posted: <strong>{product.publishedDate}</strong></h3>
                            <div className="card-actions justify-end">
                                <div className='flex flex-col lg:flex-row'>
                                    <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn bg-orange-600 mr-2 text-white hover:bg-orange-700 border-none mt-3">Book Now</label>
                                    <button className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default ProductsCard;