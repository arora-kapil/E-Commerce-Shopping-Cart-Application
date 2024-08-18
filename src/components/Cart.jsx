// Cart.jsx
import React, { useState } from 'react';
import OffersModal from './OffersModal'; // Import the OffersModal component

export default function Cart({ items, onUpdateItemQuantity, onCloseCart, errorMessage, clearErrorMessage }) {
  // State to manage discount application
  const [discount, setDiscount] = useState(false);
  // State to manage selected coupon
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  // State to manage visibility of the offers modal
  const [showOffersModal, setShowOffersModal] = useState(false);
  // State to manage checkout message
  const [checkOutMessage, setCheckOutMessage] = useState('');

  // Calculate the subtotal of the cart items
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Toggle the discount state
  const handleDiscountChange = () => {
    setDiscount(prevDiscount => !prevDiscount);
  };

  // Apply the selected coupon and close the modal
  const handleApplyCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setShowOffersModal(false);
  };

  // Handle the checkout process and display a message
  const handleCheckOut = () => {
    if (items.length === 0) {
      setCheckOutMessage('Your cart is empty!');
    } else {
      setCheckOutMessage('Your items are on their way...');
    }
  };

  const subtotal = calculateSubtotal();
  let discountAmount = 0;

  // Calculate the discount amount based on the selected coupon
  if (selectedCoupon === '5%') {
    if (subtotal >= 100) {
      discountAmount = (subtotal * 0.05).toFixed(2);
    }
  } else if (selectedCoupon === '10%') {
    discountAmount = (subtotal * 0.10).toFixed(2);
  }

  // Calculate the total price after applying the discount
  const totalPrice = (subtotal - discountAmount).toFixed(2);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <header className="cart-header">
          <h2>Your Cart</h2>
          {/* Button to close the cart */}
          <button className="close-button" onClick={onCloseCart}>Close</button>
        </header>

        {/* Display error message if present */}
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

        <ul className="cart-item-list">
          {/* Display message if cart is empty */}
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-control">
                    {/* Buttons to decrease/increase quantity */}
                    <button onClick={() => onUpdateItemQuantity(item.id, -1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="quantity-input"
                    />
                    <button onClick={() => onUpdateItemQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => onUpdateItemQuantity(item.id, -item.quantity)}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-summary">
        <h2>Summary</h2>
        <div className="summary-details">
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          {/* Button to show available offers */}
          <div className="summary-item">
            <button className="offer-button" onClick={() => setShowOffersModal(true)}>
              Show Available Offers
            </button>
          </div>
          {/* Display discount amount if applicable */}
          {discountAmount > 0 && (
            <div className="summary-item">
              <span>Discount:</span>
              <span>-${discountAmount}</span>
            </div>
          )}
          <div className="summary-item">
            <span>Total Price:</span>
            <span>${totalPrice}</span>
          </div>
        </div>
        {/* Button to proceed with checkout */}
        <button className="checkout-button" onClick={handleCheckOut}>Checkout</button>
        {checkOutMessage && <p className="checkout-message">{checkOutMessage}</p>}
      </div>
      {/* Render OffersModal if showOffersModal is true */}
      {showOffersModal && (
        <OffersModal
          onClose={() => setShowOffersModal(false)}
          onApplyCoupon={handleApplyCoupon}
        />
      )}
    </div>
  );
}
