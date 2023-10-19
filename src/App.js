import React, { useState } from 'react';
import './App.css';
import Addcar from './components/addcar/addcar';
import Displaycar from './components/displaycars/displaycar';


function App() {
  const[car,setcar]=useState([]);
  const handlecar =(Name,Model,quantity) => {
    // checking if model and name are same
    const model=car.filter((c)=>c.Model===Model && c.Name === Name);
    if(model.length>0){
        model[0].quantity=Number(model[0].quantity) + Number(quantity);
        const oldcar=car.filter((c)=> c.Name !== Name);
        setcar([model[0],...oldcar])
    }
    // if model and name are not same just add new car
    else{
      const Newcar={Name,Model,quantity};
      setcar([Newcar,...car])
    }
  }

  return (
  <>
  {/* passing props to components */}
    <Addcar handlecar={handlecar}/>
    <Displaycar car={car}/>
  </>
  );
}

export default App;
