import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/CurcurrentUser'
import { auth } from '../firebase'

const Nav = () => {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const signout = () => {
    signOut(auth)
    navigate('/')
  }
  return (
    <nav className="mainNav">
      <span style={{ color: 'red', fontSize: '25px' }}>
        NSONYE
      </span>
      <ul className="navUl">

        <NavLink to='/' className='navLink navUlLi'>HOME</NavLink>

        <NavLink to='/about' className="navUlLi">
          ABOUT US
        </NavLink>

        <li className="navUlLi">
          GALLERY
        </li>

        <NavLink to='/program' className='navUlLi navLink'>
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
    </nav>
  )
}

export default Nav