import React from 'react';

const WishlistData = ({product}) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product.productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.productName}</div>
                        <div className="text-sm opacity-50">Price: {product.productPrice}tk</div>
                    </div>
                </div>
            </td>
            <td>
                {product.location}
            </td>
            <td>{product.publishedDate}</td>
            <th>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Advertise This Product</button>
            </th>
        </tr>
    );
};

export default WishlistData;