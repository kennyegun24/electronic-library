import React, { useState } from 'react'
import google from '../assets/google.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [err, setErr] = useState(false)
  const navigation = useNavigate()
  const submitInput = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigation("/")

    } catch (err) {
      setErr(true)
    }
  }

  return (
    <section class="secSection">

      <div class="loginDiv">

        <form class="registerForm" onSubmit={submitInput}>

          <h2 class="formHeader">
            Login to your account
          </h2>

          <p class="loginHeader">
            Login using social networks
          </p>

          <ul class="socialsIcons">

            <li>
              <img src={google} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>

          </ul>

          <span class="or">
            OR
          </span>

          <div class="formLogin">

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input oninput="usernameCheck()" style={{ background: '#fff', width: '100%' }} class="formInput username"
                type="emqil" placeholder="E-maiil" />
              <span class="usernameVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input oninput="passwordCheck()" style={{ background: '#fff', width: '100%' }} class="formInput password"
                type="password" name="" id="" placeholder="Password" />
              <span class="passwordVal" style={{ display: 'flex', 'justifyContent': 'left', width: '80%' }}></span>
            </div>

            <div>

              <button class="forgotpassword" type="submit">
                Forgot Password?
              </button>

            </div>

            <input type="submit" value="Submit" class="submit login register" />
            {err && <p style={{ textAlign: 'center' }}>Wrong email or password</p>}

            <div class="flex inpAndTerms aliFlxStrt">

              <input type="checkbox" name="" id="" value="jhjhjhhhhjhj" />
              <p>
                Keep me logged in.
              </p>

            </div>

            <div>
              <p class="regLink">Don't have an account?<Link to="/register"> Register...</Link></p>
            </div>

          </div>

          <div class="flex inpAndTerms alnCnt column">

            <ul class="flex gap">

              <li>

                User Agreement
              </li>
              <li>
                Cookies policy
              </li>
              <li>
                Send Feedback
              </li>
              <li>
                All Rights Reserved
              </li>
              <li>
                Languages
              </li>

            </ul>

          </div>

        </form>

      </div>

    </section>
  )
}

export default Login