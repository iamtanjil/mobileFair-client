import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../../../Contexts/AuthContext';
import ProductsData from './ProductsData';

const MyProduct = () => {
    const { user } = useContext(AuthProvider)
    const { data: products = [] } = useQuery({
        queryKey: ['productss'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-mu.vercel.app/dashboard/myproduct?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    console.log(products)
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
                            products.map(product => <ProductsData
                            key={products._id}
                            product={product}
                            ></ProductsData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProduct;