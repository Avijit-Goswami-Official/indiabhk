import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open,setOpen] = useState(false)

  const user = true

  return (
    <nav>
        <div className="left">
          <a href='/' className='logo'>
            <img src='./logo.png' alt='log' />
            <span>IndiaBHK</span>
          </a>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>contact</a>
        </div>
        <div className="right">
          {user ? (
            <div className='user'>
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <span>Kaustubh Korlekar</span>
              <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
            ): (
            <>
              <a href='/'>Sign in</a>
              <a href='/' className='register'>Sign up</a>
            </>
          )}
          <div className="menuIcon">
            <img src='./menu.png' alt='menu' onClick={() => setOpen((prev) => !prev)}/>
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>contact</a>
            <a href='/'>Sign in</a>
            <a href='/'>Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar