import React from 'react'
import { useState } from 'react'
import './addcar.css'

const Addcar = ({handlecar}) => {
  // hook used to store and updata data
    const[Name,setName]=useState('');
    const[Model,setModel]=useState('');
    const[quantity,setquantity]=useState(0);

  return (

    // jsx code
    <>
    <div className='Wrapper'>
       <h1 className='heading'>Add Your Cars</h1>
       <div className='form'>

       <form>
       <label className="label">
        
          <span>Name</span>
          <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}  className="input"   placeholder='Type your car brand name...'/>
        
        </label> 

        <label className="label">
        <span>Model</span>
        <input type="text" value={Model} onChange={(e)=>setModel(e.target.value)}  className="input"  placeholder='Type your car model name...' />
        </label> 

        <label className="label">
        <span>Quantity</span>
        <input type='number' value={quantity} onChange={(e)=>setquantity(e.target.value)}  className="input" />
        </label> 
       </form>

       <button type='submit' onClick={()=>handlecar(Name,Model,quantity)} class='btn'>Add car</button>
    </div>
    </div>
    <hr/>
    </>
  )
}

export default Addcar