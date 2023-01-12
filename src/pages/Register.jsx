import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'

const Register = () => {
  const [err, setErr] = useState(false)
  const navigation = useNavigate()

  const register = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value
    const phone = e.target[3].value
    const username = e.target[4].value
    const password = e.target[5].value

    try {
      // IMPORT AND AWAIT THE FUNCTION TO CREATE AN ACCOUNT BY PASSING THE EMAIL AND PASSWORD AS PARAMETERS
      const response = await createUserWithEmailAndPassword(auth, email, password)

      try {
        // THIS IS TO STORE NEW REGS COLLECTIONS TO DATABASE
        await setDoc(doc(db, "users", response.user.uid), {
          uid: response.user.uid,
          displayName,
          email,
          phone,
          username,
          lastName,
        });
        navigation('/')
      } catch (err) {
        setErr(true)
      }


    } catch (err) {
      //dsjhjf
    }
  }


  return (
    <section class="secSection">
      <div class="secSectionDiv">
        <p>
          GET STARTED WITH YOUR
          ACCOUNT
        </p>
      </div>
      <div class="formDiv">
        <form class="registerForm" onSubmit={register}>
          <h2 class="formHeader"> Start with a free 60 day trial of
            Goldengiftlibrary
          </h2>
          <div class="formMinDiv">

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput name" type="text" placeholder="First Name" />
              <span class="nameVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput last_name" type="text" placeholder="Last Name" />
              <span class="lastNameVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput email" type="email" placeholder="E-mail" />
              <span class="emailVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput number" type="number" placeholder="Phone Number" />
              <span class="numberVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput username" type="text" placeholder="Username" />
              <span class="usernameVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

            <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <input class="formInput password" type="password" name="" id=""
                placeholder="Password" />
              <span class="passwordVal" style={{ display: 'flex', justifyContent: 'left', width: '80%' }}></span>
            </div>

          </div>
          <div class="flex inpAndTerms alnCnt column">
            <div class="flex inpAndTerms aliFlxStrt">
              <input type="checkbox" name="" />
              <p>
                by clicking this box means you agree to goldengiftlibrary
                terms of use and privacy policy
              </p>
            </div>
            <div>
              {err && <span>Something went wrong</span>}
              <button class="signup register" type="submit">
                SIGN UP
              </button>
              <br />
              <span class="regVal"></span>
            </div>
          </div>
          <div>
            <p class="regLink">Already have an account?<Link to="/login"> Login...</Link></p>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Register