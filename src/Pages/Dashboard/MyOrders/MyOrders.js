import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../../../Contexts/AuthContext';
import OrdersData from './OrdersData';

const MyOrders = () => {
    const { user } = useContext(AuthProvider);
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/myorders?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
            <h2 className='text-3xl'>Total Orders: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Buyer Name</th>
                            <th>Buyer Phone</th>
                            <th>Location</th>
                            <th>Offering Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <OrdersData
                            key={booking._id}
                            booking={booking}
                            i ={i}
                            ></OrdersData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;