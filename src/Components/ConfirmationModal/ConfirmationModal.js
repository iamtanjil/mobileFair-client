import React from 'react';

const ConfirmationModal = ({ title, message, buttonName, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">{buttonName}</label>
                        <button onClick={closeModal} className='btn bg-orange-600 text-white hover:bg-orange-700 border-none w-32'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;