import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Jumbotron from "./Image.jpg"
import Images from './Images'
import Cardnames from './Cardnames'
import Cardtext from './Cardtext'

const Cards = () => {
    return (
        <div className="container">
  <div className="row text-center card">
      
            <Images />
            <div className="  mb-5 text-center alignI card-body ">
            <h5 className="mb-0"><Cardnames/></h5><span className="small text-uppercase text-muted">Loyal Customer</span>
            <ul className="social mb-0 list-inline mt-3"></ul>
                <Cardtext/>
        </div>
        </div>
        </div>
    )
}

export default Cards
