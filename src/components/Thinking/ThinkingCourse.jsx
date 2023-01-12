import React from 'react'

const ThinkingCourse = () => {
    return (
        <div className='uiuxCourse'>
            <div className='uiuxImg' />
            <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '30px' }}>
                    What is design thinking process?
                </h3>
                <p className='uiuxCnts'>
                    Design in UI/UX refers to the process of creating the visual and interactive elements of a product, such as a website or mobile app. This includes everything from the overall layout and color scheme, to the typography and button styles. The design process in UI/UX is an iterative one, meaning that designers will often create multiple versions of a design and make revisions based on feedback from users and stakeholders.                </p>
                <br />
                <p className="uiuxCnts">
                    Good UI/UX design should be both visually pleasing and easy to use. This requires striking a balance between aesthetics and functionality. The design should guide the user through the product, making it easy to find what they're looking for and complete tasks. At the same time, it should be visually appealing and create a positive user experience.                </p>
                <p className="uiuxCnts">
                    Design in UI/UX process can be based on a design system, which is a set of guidelines and standards that helps to maintain consistency across the product and improve the efficiency of the design process. The design system should cover all visual and interactive aspects of the product, such as typography, color, spacing, and interactive components such as buttons and forms.

                    It's important to remember that the ultimate goal of UI/UX design is to create a product that meets the needs of the users and achieves the goals of the stakeholders.                </p>
            </div>
        </div>
    )
}

export default ThinkingCourse