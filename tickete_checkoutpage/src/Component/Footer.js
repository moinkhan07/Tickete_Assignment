import React from 'react'
import Logo from '../Assets/logo_.png';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='companylogo'>
            <img src={Logo} alt='logo' />
        </div>
        <hr/>
        <p> <span>Made with ❤️ &nbsp; &#x2022; &nbsp;</span>Privacy policy &nbsp; &#x2022; &nbsp; Terms of usage &nbsp; &#x2022; &nbsp; Cancellation policy &nbsp; &#x2022; &nbsp; Sitemap</p>
        <span className='madewith'>Made with ❤️</span>
    </div>
  )
}

export default Footer