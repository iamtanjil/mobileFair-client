import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AllSellerData from './AllSellerData';

const AllSeller = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/dashboard/sellers')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
            <h2 className='text-3xl'>Total Seller: {sellers.length}</h2>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                sellers.map(seller => <AllSellerData
                                key={seller._id}
                                seller={seller}
                                ></AllSellerData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;