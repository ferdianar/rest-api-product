import React from 'react'
import PagesLayouts from '../layouts/PagesLayouts'

const Homepage = () => {
       return (
              <React.Fragment>
                     <PagesLayouts>
                            <h1 className="font-bold text-3xl">Homepage REST API Product</h1>
                            <p className="text-gray-700 font-normal text-sm mb-6">Homepage product contain landing page information</p>
                     </PagesLayouts>
              </React.Fragment>
       )
}

export default Homepage