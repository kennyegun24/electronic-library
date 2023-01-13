import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/CurcurrentUser'
import { auth } from '../firebase'
import { FaHome, FaMoon, FaPhone, FaSun } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GiBookCover } from 'react-icons/gi';
const Nav = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const signout = () => {
    signOut(auth)
    navigate('/')
  }
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true)
      document.querySelector('#root').classList.add('dark')
    } else {
      document.querySelector('#root').classList.remove('dark')
      setToggle(false)
    }
  }

  console.log(toggle)

  return (
    <nav className="mainNav">
      <span className='logo'>
        NSONYE e-library
      </span>
      <ul className="navUl">
        <div>
          <NavLink to='/' className=' navUlLi'>
            <li>HOME </li>
            <div className='hideIcon'>

              <FaHome style={{ fontSize: '25px' }} />
            </div>
          </NavLink>
        </div>

        <div>
          <NavLink to='/about' className=" navUlLi">
            <li>
              ABOUT US
            </li>
            <div className='hideIcon'>
              <FcAbout style={{ fontSize: '25px' }} />
            </div>
          </NavLink>
        </div>

        <div>
          <NavLink to='/program' className='navUlLi'>
            <li>STUDY PROGRAM</li>
            <div className='hideIcon'>
              <GiBookCover style={{ fontSize: '25px' }} />
            </div>
          </NavLink>
        </div>

        <div>
          <li className="navUlLi navUlLi2">
            CONTACT-US
          </li>
          <div className='hideIcon'>
            <FaPhone style={{ fontSize: '25px' }} />
          </div>
        </div>

      </ul>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <NavLink to="/login" className="loginButton">
          Login
        </NavLink>
        {currentUser && <div style={{ background: 'red', padding: '0.5rem', color: 'white', borderRadius: '0.5rem' }} onClick={signout}>Logout</div>}
      </div>
      <div onClick={handleToggle}>
        {toggle ? <div style={{ color: 'white', fontSize: '20px' }}><FaMoon /></div > : <div style={{ fontSize: '20px', color: '#e69f07' }}><FaSun /></div>}
      </div>
    </nav>
  )
}

export default Nav