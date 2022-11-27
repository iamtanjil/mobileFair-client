import React from 'react';

const AllSellerData = ({seller}) => {
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
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Verify</button>
            </th>
        </tr>
    );
};

export default AllSellerData;