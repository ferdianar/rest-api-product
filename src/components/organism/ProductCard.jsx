import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
       const [products, setProducts] = useState([])

       useEffect(() => {
              FetchProductItems()
       }, [])

       const FetchProductItems = async () => {
              const response = await fetch(`http://localhost:5500/vegetables`)
              const data = await response.json()

              setProducts(data)
       }

       const DeleteProduct = async (id) => {
              await fetch(`http://localhost:5500/vegetables/${id}`, {
                     method: "DELETE",
                     headers: {
                            "Content-Type": "application/json"
                     }
              })
              FetchProductItems()
       }

       return (
              <React.Fragment>
                     {
                            products.map(productItems => (
                                   <div key={productItems.id} className="w-full flex flex-col md:flex-row justify-between bg-[#171629] p-3 rounded-md text-white">
                                          <div className="">
                                                 <div className="flex items-center justify-between">
                                                        <h3 className="font-bold text-sm">{productItems.title}</h3>
                                                        <h5 className="font-medium text-xs">{productItems.productId}</h5>
                                                 </div>
                                                 <p className="text-xs text-yellow-300 font-normal mt-1">{productItems.description}</p>
                                                 <small>{productItems.location}</small>
                                          </div>
                                          <div className="flex flex-col gap-y-2 md:mt-0 mt-4">
                                                 <Link to={`/update/${productItems.id}`} className="py-1 px-3 font-medium text-sm text-white bg-green-600 hover:bg-green-700 rounded-md">Edit</Link>
                                                 <button onClick={() => DeleteProduct(productItems.id)} className="py-1 px-3 font-medium text-sm text-white bg-red-600 hover:bg-red-700 rounded-md">Delete</button>
                                          </div>
                                   </div>
                            ))
                     }
              </React.Fragment >
       )
}

export default ProductCard