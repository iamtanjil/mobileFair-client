import React, { useContext } from 'react';
import { AuthProvider } from '../../Contexts/AuthContext';

const BookingModal = ({booking}) => {

    const {user}=useContext(AuthProvider);

    const handleOnSubmit = () => {

    };
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for {booking.productName}</h3>
                    <form onSubmit={handleOnSubmit} className='gird grid-cols-1 gap-3 mt-10'>
                        <p>Product Name</p>
                        <input type="text" disabled defaultValue={booking.productName} className="input input-bordered w-full mb-3" />
                        <p>Price in BDT</p>
                        <input type="text" disabled defaultValue={booking.productPrice} className="input input-bordered w-full mb-3" />
                        <p>Your Name</p>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered  w-full mb-3" />
                        <p>Your Mobile No.</p>
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered  w-full mb-3" />
                        <p>How Much Can Pay.</p>
                        <input name="offeringPrice" type="text" placeholder="Offering Price" className="input input-bordered  w-full mb-3" />
                        <p>Your Location</p>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full mb-3" />
                        <p>Your Email</p>
                        <input name="email" required type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-3" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;