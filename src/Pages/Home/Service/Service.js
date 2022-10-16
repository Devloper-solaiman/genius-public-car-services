import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div className='service'>
            <div>
                <img className='w-100' src={img} alt="" />
                <h2>{name}</h2>
                <h5>Price: {price} $ </h5>
                <p><small>{description}</small></p>
                <Button>Book: {name} </Button>
            </div>
        </div>
    );
};

export default Service;