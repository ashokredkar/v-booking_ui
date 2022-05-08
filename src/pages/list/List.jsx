import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './List.css';

import hotel from '../../images/hotel.webp';
import apartment from '../../images/apartment.webp';
import cabin from '../../images/cabin.jpg';
import resort from '../../images/resort.jpeg';
import villa from '../../images/villa.jpg';
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import hotel4 from '../../images/hotel4.jpg';

//date imports
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {

  const location = useLocation();
  
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)

  return (
    <div className="listContainer section-padding">
      <div className="listLeft">
        <h2>Search</h2>
        <div className="sec">
          <p>Destination</p>
          <input type="text" placeholder={destination} />
        </div>
        <div className="sec">
          <p>Check-in-Date</p>
          <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
          {openDate && (
            <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} className='listDate' />
          )}
        </div>
        <div className="sec3">
          <p>Options</p>
          <div className="optionItem">
            <span>Min-Price (per night)</span>
            <input type="number" />
          </div>
          <div className="optionItem">
            <span>Max-Price (per night)</span>
            <input type="number" />
          </div>
          <div className="optionItem">
            <span>Adult</span>
            <input type="number" min={1} placeholder={options.adult} />
          </div>
          <div className="optionItem">
            <span>Children</span>
            <input type="number" min={0} placeholder={options.children} />
          </div>
          <div className="optionItem">
            <span>Room</span>
            <input type="number" min={0} placeholder={options.room} />
          </div>
        </div>
        <button className="btn">Search</button>
      </div>

      <div className="listRight">
        <SearchItem image={hotel} title='Tower Street Mansion' distance='500m from center' features='Entire studio • 1 bathroom • 21m² 1 full bed' review='Excellent' rating='8.7' price='105' />
        <SearchItem image={hotel1} title='Colton House Hotel' distance='2km from center' features='Double Room - Disability access' review='Very Good' rating='8.2' price='79' />
        <SearchItem image={hotel3} title='Staybridge Suites' distance='3.5km from center' features='2 Bedrooms, 1 Bathroom - Minimilistic' review='Exceptional' rating='9.1' price='112' />
        <SearchItem image={apartment} title='Tower Street Mansion' distance='500m from center' features='Entire studio • 1 bathroom • 21m² 1 full bed' review='Excellent' rating='8.7' price='105' />
        <SearchItem image={hotel2} title='Colton House Hotel' distance='2km from center' features='Double Room - Disability access' review='Very Good' rating='8.2' price='79' />
        <SearchItem image={hotel4} title='Staybridge Suites' distance='3.5km from center' features='2 Bedrooms, 1 Bathroom - Minimilistic' review='Exceptional' rating='9.1' price='112' />
        <SearchItem image={cabin} title='Tower Street Mansion' distance='500m from center' features='Entire studio • 1 bathroom • 21m² 1 full bed' review='Excellent' rating='8.7' price='105' />
        <SearchItem image={resort} title='Colton House Hotel' distance='2km from center' features='Double Room - Disability access' review='Very Good' rating='8.2' price='79' />
        <SearchItem image={villa} title='Staybridge Suites' distance='3.5km from center' features='2 Bedrooms, 1 Bathroom - Minimilistic' review='Exceptional' rating='9.1' price='112' />
      </div>
    </div>
  )
}

export default List