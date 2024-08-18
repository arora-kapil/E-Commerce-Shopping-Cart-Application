import { useState } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { DUMMY_PRODUCTS } from './dummy-products';

function App() {
  // State to manage items in the shopping cart
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  // State to toggle the visibility of the cart
  const [showCart, setShowCart] = useState(false);

  // State to manage error messages (e.g., max quantity reached)
  const [errorMessage, setErrorMessage] = useState('');

  // Function to open the cart
  const handleOpenCart = () => {
    setShowCart(true);
  };

  // Function to close the cart
  const handleCloseCart = () => {
    setShowCart(false);
  };

  // Function to clear the error message
  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  // Function to handle adding items to the cart
  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      const maxQuantity = 3;

      if (existingCartItem) {
        // If item already exists in the cart, increase the quantity
        if (existingCartItem.quantity >= maxQuantity) {
          setErrorMessage(`You can only order a maximum of ${maxQuantity} units of this product.`);
        } else {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
          setErrorMessage(''); // Clear error message if item is added successfully
        }
      } else {
        // If item does not exist in the cart, add it with quantity 1
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        });
        setErrorMessage(''); // Clear error message if item is added successfully
      }

      return {
        items: updatedItems,
      };
    });
  }

  // Function to handle updating the quantity of a cart item
  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      const maxQuantity = 3;
      const newQuantity = updatedItem.quantity + amount;

      if (newQuantity <= 0) {
        // If the new quantity is 0 or less, remove the item from the cart
        updatedItems.splice(updatedItemIndex, 1);
        setErrorMessage(''); // Clear error message if item is removed
      } else if (newQuantity <= maxQuantity) {
        // If the new quantity is within the limit, update the quantity
        updatedItem.quantity = newQuantity;
        updatedItems[updatedItemIndex] = updatedItem;
        setErrorMessage(''); // Clear error message if item is updated successfully
      } else {
        // If the new quantity exceeds the limit, show an error message
        setErrorMessage(`You can only order a maximum of ${maxQuantity} units of this product.`);
      }

      return {
        items: updatedItems,
      };
    });
  }

  return (
    <>
      {showCart ? (
        <Cart
          items={shoppingCart.items}
          onUpdateItemQuantity={handleUpdateCartItemQuantity}
          onCloseCart={handleCloseCart}
          errorMessage={errorMessage}
          clearErrorMessage={clearErrorMessage}
        />
      ) : (
        <>
          <Header
            cart={shoppingCart}
            onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
            handleOpenCart={handleOpenCart}
          />
          <Shop
            onAddItemToCart={handleAddItemToCart}
            shoppingCart={shoppingCart.items}
            handleOpenCart={handleOpenCart}
          />
        </>
      )}
    </>
  );
}

export default App;
