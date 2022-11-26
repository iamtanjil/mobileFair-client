import React from 'react';

const MyProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/recentlyadded')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            
        </div>
    );
};

export default MyProduct;