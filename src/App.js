import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// grab our contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
	//const [products] = useState(data);
	const [cart, setCart] = useState([]);
	

	const addItem = item => {
		// add the given item to the cart
		setCart((cart) => {
			return [...cart, item];
		});
	};

	//remove an item from the shopping cart
	const removeItem = id => {
		setCart((cart) => {
			// find the item and remove it
			return cart.filter(item => item.id !==id);
		})
	}

	const [state] = useState({
		products: data,
		addItem,
		removeItem
	})

	return (
		<ProductContext.Provider value={state}>
      		<CartContext.Provider value={cart}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
