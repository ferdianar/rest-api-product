import React from "react"
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"

import Navbar from "./components/moleculs/Navbar"

import Homepage from "./pages/Homepage"
import Product from "./pages/Product"

import CreateProduct from "./pages/CreateProduct"
import UpdateProduct from "./pages/UpdateProduct"

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/product" element={<Product />} />
					<Route path="/create" element={<CreateProduct />} />
					<Route path="/update/:id" element={<UpdateProduct />} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App