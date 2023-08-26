import {useState} from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { HashLink as Link } from 'react-router-hash-link'

import logo from "../../images/logo.png"

import "./Nav.css"

export default function Nav() {
  // Change nav style when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  //Navbar for mobile and tablet devices
  const [mobileNav, setMobileNavbar] = useState(false)
  const handleMobileNav = () => {
    setMobileNavbar(!mobileNav)
  }

  return (
    <nav className={color ? 'nav-scroll' : ''}>
    <div className='navigation'>
      <Link to='/'>
        <img src={logo} alt='Krizbeat logo' className='rm-ent-logo'/>
      </Link>
      <div className={mobileNav ? 'nav-links open' : 'nav-links'}>
        <Link to='/artists'>Artists</Link>
        <Link to='/releases'>Releases</Link>
        <Link to='/events'>Events</Link>
        <Link to='/contacts'>Contact</Link>
      </div>
      <div className='toggle-nav-button' onClick={handleMobileNav}>
        <Hamburger size={25} />
      </div>
    </div>
  </nav>
  )
}
