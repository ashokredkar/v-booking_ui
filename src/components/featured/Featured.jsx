import React from 'react';
import PropertyList from '../propertyList/PropertyList';
import './Featured.css';
import FProperties from '../featuredProperties/FProperties';

import hotel from '../../images/hotel.webp';
import apartment from '../../images/apartment.webp';
import cabin from '../../images/cabin.jpg';
import resort from '../../images/resort.jpeg';
import villa from '../../images/villa.jpg';

import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import hotel4 from '../../images/hotel4.jpg';

const Featured = () => {
  return (
    <div className="featured section-padding">
      <div className="featuredSection1">
        <div className="featuredItem">
          <h2>Croatia</h2>
          <p>123 Properties</p>
        </div>
        <div className="featuredItem">
          <h2>Bermuda</h2>
          <p>123 Properties</p>
        </div>
        <div className="featuredItem">
          <h2>Argentina</h2>
          <p>123 Properties</p>
        </div>
      </div>

      <div className="featuredSection2">
        <h2>Browse by Property Type</h2>
        <div className="section2Items">
          <div className="s2item1">
            <PropertyList image={hotel} title='Hotel' number='133' />
          </div>
          <div className="s2item2">
            <PropertyList image={apartment} title='Apartment' number='534' />
          </div>
          <div className="s2item3">
            <PropertyList image={cabin} title='Cabin' number='23' />
          </div>
          <div className="s2item4">
            <PropertyList image={resort} title='Resort' number='763' />
          </div>
          <div className="s2item5">
            <PropertyList image={villa} title='Villa' number='1443' />
          </div>
        </div>
      </div>

      <div className="featuredSection3">
        <h2>Home Guests Love</h2>
        <div className="section3Items">
          <div className="s3item">
            <FProperties image={hotel1} title='Aparthotel Miasto' place='Madrid' price='$120' rating='8.5' review='Excellent' />
          </div>
          <div className="s3item">
            <FProperties image={hotel3} title='Comfort Suites' place='Lisbon' price='$90' rating='8.2' review='Very Good' />
          </div>
          <div className="s3item">
            <FProperties image={hotel4} title='Berry Roswald' place='Berlin' price='$230' rating='9.5' review='Exceptional' />
          </div>
          <div className="s3item">
            <FProperties image={hotel2} title='Hilten Garden' place='Austin' price='$150' rating='8.9' review='Excellent' /></div>
        </div>
      </div>
    </div>
  )
}

export default Featured