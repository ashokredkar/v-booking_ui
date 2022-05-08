import React from 'react';
import './FProperties.css';

const FProperties = ({ image, title, place, price, rating, review }) => {
  return (
    <div className="fp">
      <img src={image} alt="image" />
      <h3>{title}</h3>
      <p>{place}</p>
      <h4>Starting from {price}</h4>
      <div className="rr">
        <div className="rating">{rating}</div>
        <p>{review}</p>
      </div>
    </div>
  )
}

export default FProperties