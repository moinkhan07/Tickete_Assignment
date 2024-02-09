import React from 'react'
import Exclamatory from '../Assets/free-cancellation.png';

const UserDetail = () => {
  return (
    <div id='userdetail'>
        <h1>Confirm & pay</h1>
        <div className='cancellationdiv'>
          <div>
            <p>Free Cancellation</p>
            <img src={Exclamatory} alt='free-cancellation' />
          </div>
          <p>Tickets can be cancelled by 13th December, 2022</p>
        </div>
        <h2>Enter your details</h2>
        <p className='detailtagline'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        <div id='inputdetails'>
          <input placeholder='Full name' id='name' type="text" />
          <input placeholder='Phone number' id='phone' type="text" />
          <select id="country">
            <option value="">Country Code</option>
            <option value="1">USA (+1)</option>
            <option value="91">India (+91)</option>
            <option value="44">UK (+44)</option>
          </select>
          <input placeholder='Email' id='email' type="email" />
          <input placeholder='Confirm Email' id='confirm_email' type="email"/>
        </div>
        <hr className='hrline'/>

        <h2>Additional information</h2>
        <p className='detailtagline'>We need a few more details to complete your reservation.</p>

        <div id='additionalinputdetails' >
          <input placeholder='Input label' id='inputLab' type="text" />
          <select id="addSelect">
            <option value="">Select</option>
            <option value="random1">Random 1</option>
            <option value="random2">Random 2 </option>
            <option value="random3">Random 3</option>
          </select>
          <select id="mulSelect">
            <option value="">MultiSelect</option>
            <option value="random1">Random 1</option>
            <option value="random2">Random 2 </option>
            <option value="random3">Random 3</option>
          </select>
        </div>
        <hr className='hrline'/>
    </div>
  )
}

export default UserDetail