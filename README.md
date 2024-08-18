<h1>E-Commerce Shopping Cart Application</h1>

<h2>Project Overview</h2>
<p>
  This project is an E-Commerce Shopping Cart Application built with ReactJS. It enables users to browse products, add them to their cart, view available offers, and proceed to checkout. The application is designed with a clean and responsive UI, ensuring a seamless shopping experience across devices.
</p>

<h2>File Structure</h2>

<h3>src/ Directory</h3>
<ul>
  <li><strong>index.js</strong>: The entry point of the React application. This file renders the App component into the root DOM element.</li>
  <li><strong>App.js</strong>: The main component that defines the layout and manages the routes for different parts of the application.</li>
  <li><strong>index.css</strong>: Contains global styles that apply to the entire application, including fonts, colors, and layout.</li>
</ul>

<h3>components/ Directory</h3>
<p>This directory contains all the reusable components used throughout the application.</p>
<ul>
  <li><strong>Header.js</strong>: The header component that displays the application title and cart button. It handles navigation and cart visibility.</li>
  <li><strong>ProductList.js</strong>: Displays a list of products available for purchase, including images, titles, prices, and an "Add to Cart" button.</li>
  <li><strong>Cart.js</strong>: Manages the shopping cart, showing items added to the cart, allowing users to adjust quantities, remove items, and view the total price.</li>
  <li><strong>CartItem.js</strong>: Represents a single item in the cart, showing the product name, price, quantity controls, and a remove button.</li>
  <li><strong>OffersModal.js</strong>: Displays available discount coupons that users can apply to get discounts on their total purchase.</li>
</ul>

<h3>styles/ Directory</h3>
<p>This directory includes component-specific CSS files.</p>
<ul>
  <li><strong>Cart.css</strong>: Contains styles specific to the Cart component, including the layout and design for cart items and buttons.</li>
  <li><strong>OffersModal.css</strong>: Styles for the OffersModal component, including the layout of the modal, text, and button design.</li>
</ul>

<h2>AWS Web Hosting</h2>
<p>
  The website is hosted on Amazon S3 and can be accessed at: <a href="http://profilefyi.s3-website-us-east-1.amazonaws.com">E-Commerce Application</a>.
</p>

<h2>How to Use the Application</h2>

<h3>Run the Application</h3>
<ol>
  <li>Install the necessary dependencies using <code>npm install</code>.</li>
  <li>Start the application using <code>npm run dev</code>.</li>
  <li>The application will be available at <a href="http://localhost:5173">http://localhost:5173</a>.</li>
</ol>

<h3>Product Listing</h3>
<ul>
  <li>Browse through the list of products displayed on the homepage.</li>
  <li>Add products to your cart by clicking the "Add to Cart" button.</li>
</ul>

<h3>Manage Cart</h3>
<ul>
  <li>Click on the cart button in the header to view items in your cart.</li>
  <li>Adjust the quantity or remove items directly from the cart.</li>
</ul>

<h3>Apply Discounts</h3>
<ul>
  <li>Click on "Show Available Offers" in the cart to view discount coupons.</li>
  <li>Apply a coupon to see the discounted total price.</li>
</ul>

<h3>Checkout</h3>
<ul>
  <li>Once satisfied with the cart, review the total price and proceed with checkout.</li>
</ul>

<p>Here is a sample video on the functioning of the application: <a href="https://drive.google.com/file/d/1Bm4QL0Xj4vIbh8Jj8P-NHdkJZ8OSxfZ4/view?usp=sharing">Video</a>
</p>
