import React, { useState, useEffect } from 'react';

export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
  shoppingCart,
  handleOpenCart,
}) {
  // State to track if the 'Add to Cart' button was clicked
  const [clicked, setClicked] = useState(false);

  // State to track if the 'Go to Cart' button should be shown
  const [showGoToCart, setShowGoToCart] = useState(false);

  // Check if the product is already in the cart
  const isInCart = shoppingCart.some((item) => item.id === id);

  // Handle button click events
  const handleClick = () => {
    if (isInCart) {
      // If the item is already in the cart, open the cart
      handleOpenCart();
    } else {
      // If the item is not in the cart, add it and show animation
      onAddToCart(id);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setShowGoToCart(true);
      }, 900); // Duration for the button click animation
    }
  };

  // useEffect hook to show 'Go to Cart' if the item is in the cart
  useEffect(() => {
    if (isInCart) {
      setShowGoToCart(true);
    }
  }, [isInCart]);

  return (
    <article className="product">
      <div className="img-container">
        {/* Product image */}
        <img src={image} alt={title} />
      </div>
      <div className="product-content">
        <div>
          {/* Product title, price, and description */}
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {/* Button that either adds to cart, shows a tick animation, or directs to the cart */}
          <button
            className={clicked ? 'clicked' : ''}
            onClick={handleClick}
          >
            <span>
              {clicked ? '✔' : showGoToCart ? 'Go to Cart' : 'Add to Cart'}
            </span>
          </button>
        </p>
      </div>
    </article>
  );
}
