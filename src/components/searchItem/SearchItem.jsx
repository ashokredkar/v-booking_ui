import React from 'react';
import './SearchItem.css';
import { Link } from 'react-router-dom';

const SearchItem = ({ image, title, distance, features, review, rating , price }) => {
  return (
    <div className="itemCard">
      <div className="cardImage">
        <img src={image} alt="image" />
      </div>
      <div className="cardMiddle">
        <h2>{title}</h2>
        <span>{distance}</span>
        <div className="tag">Free Taxi</div>
        <h4>Studio Apartment with Air Conditioning</h4>
        <span>{features}</span>
      </div>
      <div className="cardRight">
        <div className="top">
          <p>{review}</p>
          <div>{rating}</div>
        </div>
        <div className="bottom">
          <span id='price'>${price}</span>
          <span>Includes taxes and fees</span>
          <Link to='/hotel'><button className='btn'>See availability</button></Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem