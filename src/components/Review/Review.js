import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { picture, rating, name, description } = props.watch;
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h5><small>Ratings:{rating}</small></h5>
            <p className='fw-bold p-3'><span className='text-danger'>User Description</span>:{description.slice(0, 200) + '...'}</p>
        </div>
    );
};

export default Review;