// Header.jsx
export default function Header({ cart, handleOpenCart }) {
  // Calculate the number of items in the cart
  const cartQuantity = cart.items.length;

  return (
    <>
      <header id="main-header">
        <div id="main-title">
          {/* Logo and title of the shop */}
          <img src="logo.png" alt="Shop Online" />
          <h1>Latest Smartphones</h1>
        </div>
        <p>
          {/* Button to open the cart, showing the number of items */}
          <button onClick={handleOpenCart}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
