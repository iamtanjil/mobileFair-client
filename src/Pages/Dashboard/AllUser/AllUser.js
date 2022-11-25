import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) => {
        const url = `http://localhost:5000/users/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Successfully Added');
                    refetch();
                }
            });
    };
    return (
        <div className='p-7'>
            <h2 className='text-3xl font-medium mb-5'>Total User: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avartar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
                                                <img src={user.img} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='flex flex-col'>
                                        {
                                            user?.role ? <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mb-3 w-32'>Already Admin</button> :
                                                <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mb-3 w-24 '>Make Admin</button>
                                        }
                                        <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none w-24'>Make Seller</button>
                                    </td>
                                    <td><button className='btn bg-orange-600 text-white hover:bg-orange-700 border-none mb-3'>Verify</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;