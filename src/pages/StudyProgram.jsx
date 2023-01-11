import React, { useState } from 'react'
import Beginner from '../components/Beginner'
import Intermediate from '../components/Intermediate'

const StudyProgram = () => {
  const [begin, setBegin] = useState(true)
  const [inter, setInter] = useState(false)
  const openBeginner = () => {
    setBegin(true)
    setInter(false)
  }
  const openIntermediate = () => {
    setInter(true)
    setBegin(false)
  }
  return (
    <div className='studyProgHead'>
      <div className='flex jstBtw ' >
        <ul className="studyUl">
          <li onClick={openBeginner} style={{ cursor: 'pointer' }}>
            Beginner
          </li>
          <li onClick={openIntermediate} style={{ cursor: 'pointer' }}>Intermediate</li>
          <li>Advanced</li>
        </ul>
        <button style={{ background: '#BC3131', color: '#fff', height: 'fit-content', padding: '1.5%', border: 'none' }}>
          Logout
        </button>
      </div>
      {begin && <div><Beginner /></div>}
      {inter && <div><Intermediate /> </div>}
    </div>
  )
}

export default StudyProgram