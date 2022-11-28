import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../../../Contexts/AuthContext';
import WishlistData from './WishlistData';

const Wishlist = () => {
    const { user } = useContext(AuthProvider)
    const { data: products = [] } = useQuery({
        queryKey: ['productsss'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-mu.vercel.app/dashboard/wishlist?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
            <h2 className='text-3xl'>Total Products: {products.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Post Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <WishlistData
                                key={products._id}
                                product={product}
                            ></WishlistData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Wishlist;