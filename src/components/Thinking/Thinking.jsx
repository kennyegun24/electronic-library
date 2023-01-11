import React from 'react'
import { Link } from 'react-router-dom'

const Thinking = () => {
    return (
        <div className='uiux'>
            <p className='uiuxTxt'>A career in UX design is fast-paced and challenging, requiring a highly diverse skillset. If you want to break into this field, there’s plenty to learn!
                In this guide, we’ll provide the ultimate introduction to UX design and tell you everything you need to know about getting started in this exciting industry. We’ll start by going over what is a UX designer, then briefly go through its history. Next, we’ll look at some of the disciplines involved, as well as what a user experience designer does in their day
            </p>
            <br />
            <p className='uiuxTxt'>
                Lastly, we’ll consider the immense value of UX design to the world, and outline how you can go about becoming a designer yourself.
            </p>

            <Link to='/thinking' className='link'>
                <p>click here to start your free ui/ux course</p>
            </Link>
            <br />
            <Link to='/thinking' style={{ color: '#fff' }}>

                <button className='cont'>
                    CONTINUE
                </button>
            </Link>

        </div>
    )
}

export default Thinking