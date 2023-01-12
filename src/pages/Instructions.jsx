import React from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
    return (
        <div className='instruct'>
            <h2>
                COURSE: GENERAL STUDIES
            </h2>
            <h2>
                LEVEL:     BEGINNERS
            </h2>
            <h2>
                COURSE TIME:  3 WEEKS
            </h2>
            <h3>
                INSTRUCTIONS
            </h3>

            <p>
                1. To move from beginner stage to intermediate, your
                pass mark is at least 80%
            </p>
            <p>

                2.     You can try as much as possible if you score less
                than 80%

            </p>
            <div style={{ display: 'flex', justifyContent: 'right', paddingRight: '5%' }}>

                <Link to='/beginnerQuiz'>
                    <button style={{ color: '#fff', background: 'red', padding: '1rem', border: 'none', cursor: 'pointer' }}>
                        START
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Instructions