import React from 'react'
import Logo from '../Assets/logo_.png';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='companylogo'>
            <img src={Logo} alt='logo' />
        </div>
        <hr/>
        <p>Made with ❤️ &nbsp; &nbsp; &#x2022; &nbsp; &nbsp; Privacy policy &nbsp; &nbsp; &#x2022; &nbsp; &nbsp; Terms of usage &nbsp; &nbsp; &#x2022; &nbsp; &nbsp; Cancellation policy &nbsp; &nbsp; &#x2022; &nbsp; &nbsp; Sitemap</p>
    </div>
  )
}

export default Footer