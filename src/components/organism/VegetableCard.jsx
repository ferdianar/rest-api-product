import React from 'react'

const VegetableCard = (props) => {
       const { product, deleteItems } = props
       return (
              <React.Fragment>
                     {
                            product.map(productItems => (
                                   <div key={productItems.id} className="w-full flex flex-col md:flex-row justify-between bg-[#171629] p-3 rounded-md text-white">
                                          <div className="">
                                                 <h3 className="font-bold text-sm">{productItems.title}</h3>
                                                 <p className="text-xs text-yellow-300 font-normal mt-1">{productItems.description}</p>
                                                 <small>{productItems.location}</small>
                                          </div>
                                          <div className="flex flex-col gap-y-2 md:mt-0 mt-4">
                                                 <button className="py-1 px-3 font-medium text-sm text-white bg-green-600 hover:bg-green-700 rounded-md">Edit</button>
                                                 <button onClick={() => deleteItems(productItems.id)} className="py-1 px-3 font-medium text-sm text-white bg-red-600 hover:bg-red-700 rounded-md">Delete</button>
                                          </div>
                                   </div>
                            ))
                     }
              </React.Fragment >
       )
}

export default VegetableCard

/**
 *const VegetableCard = (props) => {
       return (
              <React.Fragment>
                     {
                            props.product.map(productItems => (
                                   <div className="max-w-[250px] flex justify-between p-3 my-2 rounded-md bg-gray-800 text-white">
                                          <div className="">
                                                 <h3 key={productItems.id} className="font-bold text-sm">{productItems.title}</h3>
                                                 <p className="text-xs text-white font-normal">{productItems.description}</p>
                                                 <small>{productItems.location}</small>
                                          </div>
                                          <div className="flex flex-col gap-y-2">
                                                 <button className="py-1 px-3 font-medium text-sm text-white bg-green-600 hover:bg-green-700 rounded-md">Edit</button>
                                                 <button className="py-1 px-3 font-medium text-sm text-white bg-red-600 hover:bg-red-700 rounded-md">Delete</button>
                                          </div>
                                   </div>
                            ))
                     }
              </React.Fragment>
       )
}
 */
