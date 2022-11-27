import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../../../Contexts/AuthContext';
import OrdersData from './OrdersData';

const Orders = () => {
    const { user } = useContext(AuthProvider)
    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/orders?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Offering Price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersData
                            key={orders._id}
                            order={order}
                            ></OrdersData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;