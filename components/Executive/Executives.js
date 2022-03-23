import React, {useEffect} from 'react'
import Faqs from '../Accordian/Accordian'
import ContactForm from '../ContactForm/Contact'
import FeedItems from '../Feeds/FeedItems'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Sitebanner from '../Sitebanner/Sitebanner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Accordian from '../Accordian/Accordian'

export default function Executives() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            duration: 1200,
        });
    },[]);
    return(
        <React.Fragment>
            {/* Header */}
            <Header />


            {/* Top Banner */}
            <div className='style--banner servcies--banner' data-aos="fade-up">
                <Sitebanner
                    bannerTitle="Get rewarded for your knowledge and expertise"
                    bannerText1="Use the InvestorGate platform to spread the word, share your insights, and connect with like-minded business and investment professionals."
                    bannerButton="Join Today"
                />
            </div>


            {/* Executive Services */}
            <div className='feed--section section feed--section--style-2' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--ex--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="executive services"
                            sectionTitle="The ultimate consulting experience"
                        />
                    </div>

                    <div className='feed--lists'>
                        <FeedItems
                            feedLogo="/images/mic-icon.svg"
                            metaDesc="Interview With InvestorGate Analyst"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/mic-fill-icon.svg"
                            metaDesc="Interview With Investors"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/users-icon.svg"
                            metaDesc="Industry Expert &nbsp; &nbsp; Panel"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/hat-icon.svg"
                            metaDesc="Assist the leading Budsiness Schools"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/user-icon.svg"
                            metaDesc="Develop your Executive Profiles"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/user-setting-icon.svg"
                            metaDesc="Advisory, Mentorship and Board Rules"
                            feedText="Recorded interview led by InvestorGate. Share your insights on a company and earn a fee for your time."
                        />
                        
                    </div>
                </div>
            </div>


            {/* Executive banefits */}


            {/* Faqs */}
            <div className='form--section section' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="connecting experts to investors"
                            sectionTitle="Frequently asked questions"
                        />
                    </div>
                    <div className='faq__lists'>
                        <Accordian />
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className='form--section section' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--ex--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="EXECUTIVE APPLICATIONS"
                            sectionTitle="Apply to join the executive community"
                        />
                    </div>
                    <ContactForm />
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}