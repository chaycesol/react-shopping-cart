import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	// keeps track of all avail products
	const [products] = useState(data);
	// keeps track of all item in cart
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart, 
			item])
	};

	const removeItem = (itemId) => {
		setCart([
		  ...cart.filter((item) => {
			return item.id !== itemId;
		  }),
		]);
	  };

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />
			
						{/* Routes */}
						<Route exact path="/">
							<Products />
						</Route>
						<Route path="/cart">
							<ShoppingCart />
						</Route>
					</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
