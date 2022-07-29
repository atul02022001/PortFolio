import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='bg-img'>
      <div className="container header__container">
        <h5 className="text-light-header">Hello I'm AP</h5>


        {/* <h1>Atul Prajapati</h1> */}
        <div className='numDiv'>
          <span>A</span><span>T</span><span>U</span><span>L</span>
        </div>
        <div className='followDiv'>Parjapati</div>


        <h5 className="text-light-header underline">Java Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img className='img-me' src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header