import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate()
    const navigateToService = id => {
        navigate(`/service/ ${id}`)
    }
    return (
        <div className='service'>
            <div>
                <img className='w-100' src={img} alt="" />
                <h2>{name}</h2>
                <h5>Price: {price} $ </h5>
                <p><small>{description}</small></p>
                <Button onClick={() => navigateToService(id)}>Book: {name} </Button>

            </div>
        </div>
    );
};

export default Service;