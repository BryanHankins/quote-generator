import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';


const Cardtext = () => {
    const [joke, setJoke] = useState();  
    useEffect(() => {
        
   fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      setJoke(`${data.content}`);
    })

}, [])
    return (
        <div className="card-text">
            {joke}
         
            
        </div>
    )
}


export default Cardtext

