import React from 'react'
import Link from 'next/link'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'

export default function Subscribe() {
    return (
        <React.Fragment>
            <div className='site__min--height'>
                {/* Header */}
                <Header />
                
                {/* Top Banner */}
                <div className='style--banner subscribe__banner'>
                    <div className='banner__wrapper'>
                        <div className='banner__content'>
                            <div className='banner__hgroup hgroup'>
                                <div className='banner__subtitle subtitle'>
                                    <h3>Subscribe</h3>
                                </div>
                                <div className='banner__title title'>
                                    <h3>Sign up for executive interviews, in-depth analysis and expert networking</h3>
                                </div>
                            </div>
                            {/* <SectionHgroup 
                                sectionSubtitle="Subscribe"
                                sectionTitle="Sign up for executive interviews, in-depth analysis and expert networking"
                            /> */}
                            
                            <div className='banner__text'>
                                <p>Our team of dedicated analysts is consistently striving to bring you new ideas and content to enrich your investment decisions.</p>
                            </div>
                        </div>
                        <div className='banner__form'>
                            <form className='subscribe__form'>
                                <div className='form__head'>
                                    <div className='form__title'>
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className='form__detail'>
                                        <p>Sign up today for exclusive access to all InvestorGate content and services.</p>
                                    </div>
                                </div>
                                <div className='form--item'>
                                    <input className='form--control' id="name" placeholder='Name' type="text"></input>
                                </div>
                                <div className='form--item'>
                                    <input className='form--control' id="email" placeholder='Email' type="email"></input>
                                </div>
                                <div className='form--item form--item--checkbox'>
                                    <div className='flex'>
                                        <input type="checkbox" id="consent" />
                                        <label htmlFor="consent">I consent to my data being used & stored according to our <Link href="#">Privacy Policy</Link></label>
                                    </div>
                                </div>
                                <div className='form--actions'>
                                    <button type="submit">Submit From</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </React.Fragment>
    )
}