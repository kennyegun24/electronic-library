import React from 'react'

const UiuxCours = () => {
    return (
        <div className='uiuxCourse'>
            <div className='uiuxImg' />
            <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '30px' }}>
                    WHAT IS USER EXPERIENCE (UX)?
                </h3>
                <p className='uiuxCnts'>
                    User experience (UX) refers to any interaction a user has with a
                    product or service. UX design considers each and every element that shapes this experience, how it makes the user feel, and how easy it is for the user to accomplish their desired tasks.
                    This could be anything from how a physical product feels in your
                    hand, to how straightforward the checkout process is when buying something online. The goal of UX design is to create easy, efficient, relevant, and all-round pleasant experiences for the user.
                </p>
                <br />
                <p className="uiuxCnts">
                    THE DIFFERENCE BETWEEN UI/UX DESIGN
                    When talking about UX, the term user interface (UI)
                    design will inevitably crop up. However, it’s important
                    to recognize that, despite often being used interchangea
                    bly, UX and UI are two different things. It’s important to
                    outline that user interface design is not the same as
                    UX design.
                    UI refers to the actual interface of a product; the visual
                    design of the screens a user navigates through when
                    using a mobile app, or the buttons they click when
                    browsing a website. UI design is concerned with all the
                    visual and interactive elements of a product interface,
                    covering everything from typography and color palette
                    to animations and navigational touch points
                    (such as buttons and scrollbars). You can read more
                    about this tby clicking on this link
                    <a style={{ color: '#083c77', textDecoration: 'underline' }} href='https://www.careerfoundry.com/en/blog/ui-design/what-does
                    -a-ui-designer-actually-do/'> What does a ui-designer do?</a>
                </p>
            </div>
        </div>
    )
}

export default UiuxCours