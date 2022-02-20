import React, { useState, useEffect } from "react"
import VegetableCard from "./components/VegetableCard"

const App = () => {
	const [products, setProducts] = useState([
		{
			id: 1,
			title: "Pinneapple",
			location: "Malang, Indonesia",
			description: "Fresh Fruit Farm"
		},
		{
			id: 2,
			title: "Watermelon",
			location: "Surabaya, Indonesia",
			description: "Fresh Fruit Farm"
		},
		{
			id: 3,
			title: "Paprika",
			location: "Semarang, Indonesia",
			description: "Fresh Vegetable Farm"
		},
		{
			id: 4,
			title: "Cabbage",
			location: "Malang, Indonesia",
			description: "Fresh Vegetable Farm "
		},
		{
			id: 5,
			title: "Mango",
			location: "Bandung, Indonesia",
			description: "Fresh Fruit Farm"
		},
		{
			id: 6,
			title: "Dragonfruit",
			location: "Jakarta, Indonesia",
			description: "Fresh Fruit Farm"
		},
		{
			id: 7,
			title: "Potatos",
			location: "Banten, Indonesia",
			description: "Fresh Vegetable Farm"
		},
		{
			id: 8,
			title: "Papaya",
			location: "Surabaya, Indonesia",
			description: "Fresh Vegetable Farm "
		}
	])

	const DeleteItems = (productId) => {
		const itemsRemaining = products.filter(product => product.id !== productId)
		setProducts(itemsRemaining)
		console.log(products)
	}

	const [name, setName] = useState("Ferdian Ahmad R")

	useEffect(() => {
		console.log("Use Side Effect");
	}, [name])

	return (
		<div className="App m-5 mx-4 md:mx-20" >
			<h1 className="font-bold text-3xl">React Product REST API</h1>
			<p className="text-gray-700 font-normal text-sm mb-6">Product Rest API with React and React Router</p>
			<React.Fragment>
				{/* <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
					<VegetableCard product={products} deleteItems={DeleteItems} />
				</div> */}
				<h1 className="font-bold text-xl">{name}</h1>
				<button onClick={() => setName("Reni Nur Fadhila")} className="px-3 py-1 rounded-[5px] mt-2 hover:bg-blue-800 bg-blue-600 text-white font-medium">Change Name</button>
			</React.Fragment>
		</div >
	)
}

export default App