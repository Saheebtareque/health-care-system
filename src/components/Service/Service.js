import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name , description ,img,id } = service;
    const history = useHistory();

    const infoDoctor = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
                <button className="btn btn-warning" onClick={infoDoctor}>Get appointment now</button>
        
        </div>
    );
};

export default Service;