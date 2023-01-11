import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UiUx from './UiUx'


const Beginner = () => {
  const [uiux, setUiux] = useState(false)
  const [beg, setBeg] = useState(true)

  const handleUiUx = () => {
    setUiux(true)
    setBeg(false)
  }

  return (
    <>
      {beg &&
        <div>
          <h3 style={{ fontFamily: 'sans-serif', fontSize: '20px', padding: '1rem' }}>
            Beginner Level
          </h3>
          <div className='bookGrid'>
            <div onClick={handleUiUx} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='first'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='second'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='third'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='fourth'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='fifth'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='sixth'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <div className='seven'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The creative process of design</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff' }}>
              <Link to='/instruction'><div className='eight'></div></Link>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>Final assessment for beginner level</p>
                  <p>Score minimum of 80% to pass</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>Beginner</p>
                  <p>1hr 30mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {uiux && <UiUx />}
    </>
  )
}

export default Beginner