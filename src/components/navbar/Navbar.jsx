import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdHotel } from 'react-icons/md';
import { ImAirplane } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { FaTaxi, FaEye } from 'react-icons/fa';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';


const Navbar = () => {

  const NavItems = () => (
    <>
      <div className="nav-menu menu1" style={{ background: 'white', borderRadius: '20px' }}>
        <MdHotel className='icon' style={{ color: 'var(--color-primary)' }} />
        <p style={{ color: 'var(--color-primary)' }}>Hotel</p>
      </div>
      {/* <div className="nav-menu menu1">
        <MdHotel className='icon' />
        <p>Hotel</p>
      </div> */}
      <div className="nav-menu menu2">
        <ImAirplane className='icon' />
        <p>Flight</p>
      </div>
      <div className="nav-menu menu3">
        <AiFillCar className='icon' />
        <p>Car</p>
      </div>
      <div className="nav-menu menu4">
        <FaEye className='icon' />
        <p>Attraction</p>
      </div>
      <div className="nav-menu menu5">
        <FaTaxi className='icon' />
        <p>Taxi</p>
      </div>
    </>
  )

  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="nav">

      <Link className='logo' to='/'>V-Booking</Link>

      <div className="navigation">
        <NavItems />
      </div>

      <div className="mobileNav">
        {toggle
          ? <CgClose color='white' size={25} onClick={() => setToggle(false)} />
          : <CgMenuRightAlt color='white' size={25} onClick={() => setToggle(true)} />}
        <div className="mobileMenu">
          {toggle && (
            <NavItems />
          )}
        </div>
      </div>

      {/* <div className="login">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </div> */}
    </div>

  )
}

export default Navbar