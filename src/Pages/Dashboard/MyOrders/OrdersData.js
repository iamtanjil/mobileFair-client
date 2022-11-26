import React from 'react';

const OrdersData = ({i, booking}) => {
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{booking.productName}</td>
            <td>{booking.buyerName}</td>
            <td>{booking.mobileNumber}</td>
            <td>{booking.location}</td>
            <td>{booking.offeringPrice}</td>
            <td>
                <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-3'>Mark as Sold</button>
            </td>
        </tr>
    );
};

export default OrdersData;