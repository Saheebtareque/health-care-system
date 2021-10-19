import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name , description ,img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
                <button className="btn btn-warning">Get appointment now</button>
        
        </div>
    );
};

export default Service;