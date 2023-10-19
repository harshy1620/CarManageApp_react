import React from 'react'
import './display.css'
const Displaycar = ({car}) => {
  return (
    <div className='wrapper-2'>
   {/* mapping over array to display cars */}
            {car?.map((c,index)=>{
                return(
                  <ul className='ul'  key={index}>
                    
                      <li>Name:{c.Name}</li>
                      <li>Model:{c.Model}</li>
                      <li>Quantity:{c.quantity}</li>
                    
                    </ul>
                )
               
            })}
        
    </div>
  )
}

export default Displaycar