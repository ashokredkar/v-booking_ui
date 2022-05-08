import React from 'react';
import './PropertyList.css';

const PropertyList = ({ image, title, number }) => {
  return (
    <div className="pList">
      <img src={image} alt="image" />
      <h4>{title}</h4>
      <p>{number} hotels</p>
    </div>
  )
}

export default PropertyList