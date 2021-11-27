import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name2, name, img, balance, specialist
    } = props.service;

    return (

        <div className="col bg-white">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Place Name: {name2}</h5>
                    <h5>Price:{balance}</h5>


                    <p className="card-text">Details: {specialist.slice(0, 60)}</p>
                    <Link to={`/Doctor/${_id}`}>
                        <button className="btn">{name.toUpperCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;