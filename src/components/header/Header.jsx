import React, { useState } from 'react';
import './Header.css';
import { BiHotel } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GiPerson } from 'react-icons/gi';

//date imports
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  // date states
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])
  const [openDate, setOpenDate] = useState(false);

  // option states
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (optionType, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [optionType]: operation === 'd' ? options[optionType] - 1 : options[optionType] + 1,
      }
    })
  }

  // redirecting to hotel page when search is clicked
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/list', {state: { date, options, destination }});
  }

  return (
    <div className="header section-padding">
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>Get rewarded every time you travel, unlock instant savings of 10% or more with an account on our platform absolutely free</p>
      <button className="btn">Sign In / Register</button>

      <div className="searchBar">
        <div className="searchItems">

          <div className="item item1">
            <BiHotel className='icon' />
            <input type="text" placeholder='Enter your destination' onChange={e => setDestination(e.target.value)} />
          </div>

          <div className="item item2">
            <FaRegCalendarAlt className='icon' />
            <span onClick={() => setOpenDate(!openDate)} >
              {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
            </span>
            {openDate && (
              <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false} ranges={date} className="selectDate" minDate={new Date()}
            />
            )}
          </div>

          <div className="item item3">
            <GiPerson className='icon' />
            <span onClick={() => setOpenOptions(!openOptions)} >
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button disabled={options.adult <= 1} className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}> - </button>
                    <span className="optionCounterNumber">
                      {options.adult}
                    </span>
                    <button onClick={() => handleOption("adult", "i")}
                      className="optionCounterButton"> + </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={options.children <= 0} className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}> - </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button onClick={() => handleOption("children", "i")}
                      className="optionCounterButton"> + </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button disabled={options.room <= 0} className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}> - </button>
                    <span className="optionCounterNumber">
                      {options.room}
                    </span>
                    <button onClick={() => handleOption("room", "i")}
                      className="optionCounterButton"> + </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button onClick={handleSearch} className="btn">Search</button>

      </div>
    </div>
  )
}

export default Header