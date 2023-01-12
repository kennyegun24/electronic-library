import React from 'react'
import img from '../assets/background/2.jpeg'

const AboutUs = () => {
    return (
        <div className='abt' style={{ marginTop: '5%', marginBottom: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className='desktopFlex'>
                <div className='aboutImg'>
                    <div className='abtAbout' >
                        <h3>About Us</h3>
                        <p>Nsonye is a social impact organization bridging the technology gender-gap for women and girls across Africa. Through our engaing community and upskilling programs, we provide an entry pathway for women and girls to transition into the tech industry,  while also providing them with mentprship and resources to ensure their continued growth. Our core values are built around teamwork, community building and effective mentoring. One person at a time, we are enabling more women and girls to participate and build careers in the tech industry. At Nsonye, we are passionate about having more #WomenInTech emerge from Africa  and want you to be part</p>
                    </div>
                </div>
                <div className='desktopImg'></div>
            </div>

            <div style={{ width: '100%' }}>
                <div style={{ flexWrap: 'wrap', display: 'flex', margin: 'auto', width: '90%', gap: '1rem', alignItems: 'center', justifyContent: 'space-around' }}>
                    <div className='aboutHeader'>
                        <div style={{ display: 'flex', gap: '1%', textAlign: 'center', width: '100%', justifyContent: 'center' }}>
                            <h3>Our</h3>
                            <h3 style={{ color: 'red' }}>Mission</h3>
                        </div>
                        <p>To build a community that covers for the direct needs for women and girls transitioning into the tech industry</p>
                    </div>
                    <div className='imgMobileHide'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5em', fontFamily: 'sans-serif', textAlign: 'center', fontSize: '25px' }}>
                        <h2>Meet Our</h2>
                        <h2 style={{ color: 'red' }}>Mentors</h2>
                    </div>
                    <div style={{ width: '100%', marginTop: '2%' }}>
                        <p className='textCnt'>Meet our student mentors. They are always ready to provide you with top-notch assistamce and guide you through your journey</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '3%', justifyContent: 'center' }} className='wrap'>
                    <div className="mentor">
                        <div className="mentor1"></div>
                        <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                            <p>Gbolalahan Adebayo</p>
                            <p style={{ color: 'red' }}>Data Analysis</p>
                        </div>
                    </div>
                    <div className="mentor">
                        <div className="mentor3"></div>
                        <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                            <p>Agina-obu Boma</p>
                            <p style={{ color: 'red' }}>Product Design</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', padding: '10% 10% 5% 10%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div style={{ display: 'flex', gap: '0.5em', fontFamily: 'sans-serif', textAlign: 'left', width: '100%', fontSize: '20px' }}>
                        <h2>Our</h2>
                        <h2>Participants</h2>
                    </div>

                    <div className='participants'>
                        <div className="member">
                            <div className="member1"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Ogundele Victoria</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Web Developer</p>
                            </div>
                        </div>

                        <div className="member">
                            <div className="member2"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Lawal Basheerah Opeyemi</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Product Design</p>
                            </div>
                        </div>

                        <div className="member">
                            <div className="member3"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Gloria Johnson</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Product Management</p>
                            </div>
                        </div>
                        <div className="member">
                            <div className="member4"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Flourish Eniogo Olujinmi</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Product Management</p>
                            </div>
                        </div>
                        <div className="member">
                            <div className="member5"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Omolola Olorunfemi</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Product Design</p>
                            </div>
                        </div>
                        <div className="member">
                            <div className="member6"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Gory Ordu</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Data Analysis</p>
                            </div>
                        </div>
                        <div className="member">
                            <div className="member7"></div>
                            <div style={{ padding: '0.3rem', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                                <p>Immaculate Lughas</p>
                                <p style={{ color: 'red', textAlign: 'center' }}>Data Analysis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='support'>
                <div className='supportDiv'>
                    <h3 style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>Support Our Cause</h3>
                    <p>We are a non profit organization. We train students at no cost whatsoever. Due to this, we get zero revenue from students, but to continue running this organization and making the organization grow further, we do make gradual upgraades both in resourses and also in our trainers, which we pay for. Due to all of these factors mentioned, we accept humble donations from individuals and organizations who are willing to support our cause</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs