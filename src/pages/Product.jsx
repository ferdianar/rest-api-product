import React, { useState, useEffect } from 'react'
import ProductCard from '../components/organism/ProductCard'
import PagesLayouts from '../layouts/PagesLayouts'

const Product = () => {

       /*const DeleteItems = (productId) => {
              const itemsRemaining = products.filter(product => product.id !== productId)
              setProducts(itemsRemaining)
              console.log(products)
       }*/

       return (
              <React.Fragment>
                     <PagesLayouts>
                            <h1 className="font-bold text-3xl">Product Page</h1>
                            <p className="text-gray-700 font-normal text-sm mb-6">Product page contain product list who available in this time</p>
                            <a href="/create" className="mb-4 py-2 px-4 rounded-md bg-green-600 text-white font-medium">Create Product</a>
                            <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 md:gap-3">
                                   <ProductCard />
                            </div>
                     </PagesLayouts>
              </React.Fragment>
       )
}

export default Product