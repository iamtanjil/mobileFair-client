import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Components/ConfirmationModal/ConfirmationModal';

const AllUser = () => {
    const [deletingUser, setDeleteingUser] = useState(null);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-mu.vercel.app/users')
            const data = await res.json();
            return data;
        }
    });
    const closeModal = () => {
        setDeleteingUser(null);
    }

    const handleMakeAdmin = (id) => {
        const url = `https://assignment-12-server-mu.vercel.app/users/${id}`;

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

    const handleMakeSeller = (id) => {
        const url = `https://assignment-12-server-mu.vercel.app/seller/${id}`;

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
                    toast.success('Seller Successfully Added');
                    refetch();
                }
            });
    };

    const handelDeleteUser = user => {
        console.log(user);
        fetch(`https://assignment-12-server-mu.vercel.app/manageuser/${user._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${user.name} Deleted Successfully`)
            }
        })
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
                            <th>Admin</th>
                            <th>Seller</th>
                            <th>Action</th>
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
                                    <td>
                                        {
                                            user?.role === 'admin' ? <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none w-32'>Already Admin</button> :
                                                <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mb-3 w-24 '>Make Admin</button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user?.role === 'seller' ? <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none w-32'>Already Seller</button> :
                                                <button onClick={() => handleMakeSeller(user._id)} className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none w-24'>Make Seller</button>
                                        }
                                    </td>
                                    <td>
                                        <label htmlFor="confirmation-modal" onClick={() => setDeleteingUser(user)} className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none w-24'>Delete User</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            {
                deletingUser &&
                <ConfirmationModal
                    title={'Are You Sure to Delete?'}
                    message={`Are you sure to delete ${deletingUser.name}?`}
                    closeModal={closeModal}
                    modalData={deletingUser}
                    buttonName='Okey! Procced'
                    successAction={handelDeleteUser}
                ></ConfirmationModal>
            }
            </div>
        </div>
    );
};

export default AllUser;