import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

// The Shop component is responsible for displaying the list of products
// and passing necessary props to each Product component.
export default function Shop({ onAddItemToCart, shoppingCart, handleOpenCart }) {
  return (
    <section id="shop">
      <h2>Smart Phones</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* Render a Product component for each item in DUMMY_PRODUCTS */}
            <Product
              {...product}
              onAddToCart={onAddItemToCart}
              shoppingCart={shoppingCart}
              handleOpenCart={handleOpenCart}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
