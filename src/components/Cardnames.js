import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
const Cardnames = () => {
    const shortName = uniqueNamesGenerator({
      dictionaries: [names], // colors can be omitted here as not used
      length: 1
    });
    return (
        <p className="card-text mb-0" text="shortName">{shortName }</p>
    )
}

export default Cardnames
