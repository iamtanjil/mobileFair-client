import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';



const Category = () => {
    const { data: categorys = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data;
        }
    });
    console.log(categorys);
    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-center'>View Product by Category</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    categorys.map(category =>
                        <div className="card w-full bg-base-100 shadow-xl image-full mt-12">
                            <figure><img src={category.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className='w-full flex flex-col items-center justify-center mt-10'>
                                    <h2 className="card-title">{category.name}</h2>
                                    <p>View All {category.name} phone from our sites.</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <Link to={`/products/${category.name}`} className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3">View All</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;