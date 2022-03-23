import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Sitebanner from '../Sitebanner/Sitebanner'
import ContactForm from './Contact'

export default function Contact() {
    return(
        <React.Fragment>
            <Header />

            {/* Top Banner */}
            <div className='style--banner servcies--banner' data-aos="fade-up">
                <Sitebanner
                    bannerTitle="Have a question? Get in touch"
                    bannerText1="Whether you’re an investor interested in our service, an executive keen on joining our community, or a student inquiring about a university partnership, get in touch here."
                    bannerButton="Inquiry Form"
                />
            </div>


            {/* Contact Form section */}
            <div className='form--section section' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <SectionHgroup
                        sectionSubtitle="general inquiries"
                        sectionTitle="Contact Us"
                    />
                    <ContactForm />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}