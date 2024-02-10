import React from 'react'
import Logo from '../Assets/logo.png';
import Lock from '../Assets/lock.png';
import Help from '../Assets/help.png';
import Back from '../Assets/back.png';

const Header = () => {
  return (
    <div id='header' >
        <div className='headermain'>
            <div className='headermainlogo'>
                <img className='logo' src={Logo} alt='logo' />
                <img className='back' src={Back} alt='back' />
            </div>
            <div className='headermaincheckout'>
                <img src={Lock} alt='lock'/>
                <p>Checkout</p>
            </div>
            <div className='headermainhelp'>
                <img src={Help} alt='help'/>
                <p>Help</p>
            </div>
        </div>
        <div id='advertisemessage'>
            <p>Holding your tickets for 30:00</p>
        </div>
    </div>
  )
}

export default Header