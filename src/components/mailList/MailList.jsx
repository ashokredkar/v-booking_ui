import React from 'react';
import './MailList.css';

function MailList() {
  return (
    <div className="mailList section-padding">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="mailComponent">
        <input type="email" placeholder='Enter your Email' />
        <button className='btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList