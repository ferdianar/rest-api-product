import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
       const [title, setTitle] = useState("")
       const [location, setLocation] = useState("")
       const [description, setDescription] = useState("")

       useEffect(() => {
              getProductById()
       }, [])

       const { id } = useParams()

       const getProductById = async () => {
              const response = await fetch(`http://localhost:5500/vegetables/${id}`)
              const data = await response.json()

              setTitle(data.title)
              setLocation(data.location)
              setDescription(data.description)
       }

       const redirect = useNavigate()

       const updateProduct = async (event) => {
              event.preventDefault()

              const productData = { title, location, description }

              await fetch(`http://localhost:5500/vegetables/${id}`, {
                     method: "PUT",
                     body: JSON.stringify(productData),
                     headers: {
                            "Content-Type": "application/json"
                     }
              })

              redirect("/")
       }

       return (
              <React.Fragment>
                     {/* <!-- Heading Create Product Form --> */}
                     <div className="max-w-2xl m-auto mt-8 text-center">
                            <h1 className="text-[2rem] font-bold md:text-heading-lg">Lets Create Your Product</h1>
                            <p className="text-small text-gray-500 font-normal pt-2">Create product and sells it into marketplace to get a revenue</p>
                     </div>
                     {/* <!-- Create Product Form --> */}
                     <form onSubmit={updateProduct} className="max-w-sm m-auto mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10">
                            {/* <!-- Product Title --> */}
                            <div className="mb-4">
                                   <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Title</label>
                                   <input type="text" required id="title" value={title} name="title" onChange={event => setTitle(event.target.value)} placeholder="Enter Title" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Location Title --> */}
                            <div className="mb-4">
                                   <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                                   <input type="text" required id="location" value={location} name="location" onChange={event => setLocation(event.target.value)} placeholder="Enter Location" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Description Title --> */}
                            <div className="mb-4">
                                   <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Description</label>
                                   <input type="text" required id="description" value={description} name="description" onChange={event => setDescription(event.target.value)} placeholder="Enter Description" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-3 leading-none bg-blue-800 border-blue-800 border rounded text-white hover:border-transparent hover:bg-white hover:text-blue-800 mt-4 sm:mt-0">
                                   <p className="text-lg font-bold">Update Product</p>
                            </button>
                     </form>
              </React.Fragment>
       )
}

export default UpdateProduct