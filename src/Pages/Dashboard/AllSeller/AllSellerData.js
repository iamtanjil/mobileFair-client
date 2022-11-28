import React from 'react';
import toast from 'react-hot-toast';

const AllSellerData = ({ seller, refetch }) => {

    const handleSellerVerification = id => {
        fetch(`http://localhost:5000/seller/verification/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Successfully Verified');
                    refetch();
                }
            })
    };
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{seller.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {seller.email}
            </td>
            <th>
                {
                    seller?.verifiedSeller === 'yes' ? <button className='btn btn-sm bg-green-600 text-white border-none mt-3'>Verified</button> :
                        <button onClick={() => handleSellerVerification(seller._id)} className="btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Verify</button>
                }
            </th>
        </tr>
    );
};

export default AllSellerData;