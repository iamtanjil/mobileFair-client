import React from 'react';
import { Link } from 'react-router-dom';

const OrdersData = ({ order }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={order.productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.productName}</div>
                    </div>
                </div>
            </td>
            <td>
                {order.offeringPrice}
            </td>
            <td>{order.location}</td>
            <th>
                {
                    order?.paid ?
                        <button className='btn btn-sm bg-green-600 border-none text-white'>Paid</button> :
                        <Link to={`/dashboard/payments/${order._id}`} className="btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Pay</Link>
                }
            </th>
        </tr>
    );
};

export default OrdersData;