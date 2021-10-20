import React from 'react'
import { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';


// FOR 10/16/2021
// I NEED TO FIGURE OUT HOW TO USE AN API
function Images() {
  // const [books, setBooks] = useState(null);

  // // we will use async/await to fetch this data
  // async function getData() {
  //   const response = await fetch("https://www.anapioficeandfire.com/api/books");
  //   const data = await res.json();

  //   // store the data into our books variable
  //   setBooks(data) ;
  // }

  return (
    <img src="https://100k-faces.glitch.me/random-image" className="card-img-top cardimgfixer"  alt="Random"></img>
  )
}
export default Images
