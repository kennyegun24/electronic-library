import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Color from './color/Color'
import Creative from './creativity/Creativity'
import Font from './Font/Font'
import Theories from './theories/Theories'
import Thinking from './Thinking/Thinking'
import UiUx from './UiUx'
import Why from './why/Why'


const Beginner = () => {
  const [uiux, setUiux] = useState(false)
  const [beg, setBeg] = useState(true)
  const [font, setFont] = useState(false)
  const [color, setColor] = useState(false)
  const [why, setWhy] = useState(false)
  const [think, setThink] = useState(false)
  const [theory, setTheory] = useState(false)
  const [creative, setCreative] = useState(false)

  const handleUiUx = () => {
    setUiux(true)
    setBeg(false)
    setFont(false)
    setColor(false)
    setWhy(false)
    setThink(false)
    setTheory(false)
  }

  const handleFont = () => {
    setUiux(false)
    setBeg(false)
    setFont(true)
    setColor(false)
    setWhy(false)
    setThink(false)
    setTheory(false)
  }

  const handleColor = () => {
    setUiux(false)
    setBeg(false)
    setFont(false)
    setColor(true)
    setWhy(false)
    setThink(false)
    setTheory(false)
  }

  const handleTheories = () => {
    setUiux(false)
    setBeg(false)
    setFont(false)
    setColor(false)
    setWhy(false)
    setThink(false)
    setTheory(true)
  }
  const handleWhy = () => {
    setUiux(false)
    setBeg(false)
    setFont(false)
    setColor(false)
    setWhy(true)
    setThink(false)
    setTheory(false)
  }
  const handleThink = () => {
    setUiux(false)
    setBeg(false)
    setFont(false)
    setColor(false)
    setWhy(false)
    setThink(true)
    setTheory(false)
  }
  const handleCreative = () => {
    setUiux(false)
    setBeg(false)
    setFont(false)
    setColor(false)
    setWhy(false)
    setThink(false)
    setTheory(true)
    setCreative(true)
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

            <div onClick={handleThink} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='second'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>The Design of Everyday Things</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div onClick={handleFont} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='third'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>Theories of Font Sizes</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div onClick={handleTheories} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='fourth'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>UIUX Theories</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div onClick={handleColor} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='fifth'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>THeories behing choice of colors</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div onClick={handleCreative} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
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

            <div onClick={handleWhy} style={{ border: '1px solid #fff', cursor: 'pointer' }}>
              <div className='seven'></div>
              <div style={{ padding: '4%', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#fff' }}>
                <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '12px', background: '#BC3131', padding: '0.4rem', width: 'fit-content' }}>Beginner</p>
                <div>
                  <p>Why, How and What</p>
                  <p>Complete Course</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontFamily: 'sans-serif' }}>
                  <p>FREE</p>
                  <p>Beginner</p>
                  <p>18hrs</p>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #fff', cursor: 'pointer' }}>
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
      {font && <Font />}
      {color && <Color />}
      {theory && <Theories />}
      {think && <Thinking />}
      {why && <Why />}
      {creative && <Creative />}
    </>
  )
}

export default Beginner