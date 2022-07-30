import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {MdOutlineDoubleArrow} from 'react-icons/md'

const Header = () => {
  return (
    <header className='bg-img'>
      <div className="container header__container">
        <h5 className="text-light-header">Hello I'm</h5>


        {/* <h1>Atul Prajapati</h1> */}
        <div className='numDiv'>
          <span>A</span><span>T</span><span>U</span><span>L</span>
        </div>
        <div className='followDiv'>Prajapati</div>


        <h5 className="text-light-header underline">Java Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img className='img-me' src={ME} alt="me" />
        </div>
        <div className='scroll__down'>
        <a href="#contact" >Scroll Down<MdOutlineDoubleArrow style={{marginBottom:"-3px", marginLeft:"5px"}}/> </a>

        </div>
      </div>
    </header>
  )
}

export default Header