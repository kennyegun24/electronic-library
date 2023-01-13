import { signOut } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/CurcurrentUser'
import { auth } from '../firebase'
import { FaMoon, FaSun } from 'react-icons/fa';
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

        <NavLink to='/' className=' navUlLi'>
          <li>HOME</li>
        </NavLink>

        <NavLink to='/about' className=" navUlLi">
          <li>

            ABOUT US
          </li>
        </NavLink>

        <NavLink to='/program' className='navUlLi'>
          STUDY PROGRAM
        </NavLink>

        <li className="navUlLi">
          CONTACT-US
        </li>

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