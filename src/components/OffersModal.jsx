// OffersModal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/OffersModal.css';

// The OffersModal component displays available discount offers in a modal.
const OffersModal = ({ onClose, onApplyCoupon }) => {

    // Function to handle when a user clicks on a coupon offer.
    const handleCouponClick = (discount) => {
        onApplyCoupon(discount);
    };

    return ReactDOM.createPortal(
        // Modal overlay to cover the screen
        <div className="modal-overlay">
            {/* Modal content box */}
            <div className="modal-content">
                <h2>Available Offers</h2>
                {/* List of available offers */}
                <ul>
                    <li onClick={() => handleCouponClick('5%')}>5% discount on orders above $100</li>
                    <li onClick={() => handleCouponClick('10%')}>10% discount on your HSBC credit card</li>
                </ul>
                {/* Button to close the modal */}
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('modal-root') // Renders the modal in the 'modal-root' div in index.html
    );
};

export default OffersModal;
