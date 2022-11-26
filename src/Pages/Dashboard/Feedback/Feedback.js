import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Feedback = () => {
    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='p-7'>
           <h2 className='text-3xl'> Total Message: {feedback.length}</h2>
        </div>
    );
};

export default Feedback;