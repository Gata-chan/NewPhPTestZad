import React from 'react'
import Logo from '../imgs/logo512.png';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <div className='HeaderMainDiv'>
        <div className='LogoDiv'>
            <img className='Logo' alt='ReactLogo' src={Logo}/>
            <p className='LogoText'>Logo</p>
        </div>
    </div>
  )
}

export default HeaderComponent