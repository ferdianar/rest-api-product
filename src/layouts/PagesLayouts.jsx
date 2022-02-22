import React from 'react'

const PagesLayouts = (props) => {
       const { children } = props
       return (
              <React.Fragment>
                     <div className="mx-4 my-4 md:my-10 md:mx-20" >
                            {children}
                     </div>
              </React.Fragment>
       )
}

export default PagesLayouts