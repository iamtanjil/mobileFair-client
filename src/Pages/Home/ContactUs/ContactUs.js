import React, { useContext } from 'react';
import { AuthProvider } from '../../../Contexts/AuthContext';
import './ContactUs.css';
import toast from 'react-hot-toast';


const ContactUs = () => {
    const {user} = useContext(AuthProvider);
    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const subject = form.subject.value;
        const message = form.message.value;

        const feedbackData = {
            email: user?.email,
            userName: user.displayName,
            subject,
            message
        };
        saveToDb(feedbackData);
        form.reset();
    };

    const saveToDb = data => {
        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Message Sent Successfully');
            }
        })
    };
    return (
        <div className='contact-bg p-7 rounded-md mb-3'>
            <h2 className='text-2xl font-medium text-orange-600 text-center'>Contact Us</h2>
            <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
            <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center mt-5'>
                <input type="text" defaultValue={user?.email} readOnly className="input input-bordered input-sm w-full max-w-xs" />
                <input type="text" name='subject' placeholder="Your Subject" className="input input-bordered input-sm w-full mt-3 max-w-xs" />
                <textarea name='message' className="textarea textarea-bordered mt-3 w-80 h-28" placeholder="Your Message"></textarea>
                <input type='submit' value='Submit' className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5"/>
            </form>
        </div>
    );
};

export default ContactUs;