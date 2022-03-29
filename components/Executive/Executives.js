import React, {useEffect} from 'react'
import ContactForm from '../ContactForm/Contact'
import FeedItems from '../Feeds/FeedItems'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Sitebanner from '../Sitebanner/Sitebanner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Logoslider from '../Logoslider/Logoslider'
import Accordion from '../Accordion/Accordion'

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
            <div className='style--banner executives--banner'>
                <Sitebanner
                    bannerTitle="Get rewarded for your knowledge and expertise"
                    bannerText1="Use the InvestorGate platform to spread the word, share your insights, and connect with like-minded business and investment professionals."
                    bannerButton="Join Today"
                />
                <div className='slider__wrapper site__width'>
                    <div className='banner__logo--slider'>
                        <div className='slider__title'>
                            <h6>With Executives From</h6>
                        </div>
                        <Logoslider />
                    </div>
                </div>
            </div>


            {/* Executive Services */}
            <div className='feed--section section feed--section--style-2'>
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
                            feedText="We connect you for a recorded conversation directly with experienced investors. Earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/users-icon.svg"
                            metaDesc="Industry Expert &nbsp; &nbsp; Panel"
                            feedText="Join a panel of other industry experts and field questions from our community of investors, corporate professionals and students, hosted by an InvestorGate analyst. Earn a fee for your time."
                        />
                        
                        <FeedItems
                            feedLogo="/images/hat-icon.svg"
                            metaDesc="Assist the leading Budsiness Schools"
                            feedText="Reach students from many of the leading business schools and universities and help improve learning outcomes."
                        />
                        
                        <FeedItems
                            feedLogo="/images/user-icon.svg"
                            metaDesc="Develop your Executive Profiles"
                            feedText="Build your own dedicated profile page to demonstrate your expertise. InvestorGate facilitates connections with our members for ongoing consulting opportunities."
                        />
                        
                        <FeedItems
                            feedLogo="/images/user-setting-icon.svg"
                            metaDesc="Advisory, Mentorship and Board Rules"
                            feedText="Referrals to new advisory, mentorship or board positions"
                        />
                        
                    </div>
                </div>
            </div>


            {/* Executive banefits */}

            <div className='two--column--section section has--bg'>
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <SectionHgroup 
                            sectionSubtitle="BENEFITS"
                            sectionTitle="Executive community membership"                     
                        />
                        <div className="section--content">
                            <p>
                                As a member of our executive community you’ll receive a host of value-added benefits, over and above a consulting fee for your time.
                            </p>
                            <ul className='content--list'>
                                <li>Lifetime access to InvestorGate membership site</li>
                                <li>
                                    Learnings from the perspective of investors, shareholders, and capital markets
                                </li>
                                <li>Opportunities for future projects or advisory engagements</li>
                                <li>Inclusion in relevant industry panel forums</li>
                                <li>Access to business schools and mentoring programmes</li>
                                <li>Involvement in other events such as Executive / Industry Forums</li>
                            </ul>
                        </div>
                    </div>
                    <div className='section--column__content' data-aos="fade-up">
                        <div className='banner__right--image'>
                            <Image src='/images/ipad3.png' alt='Benefits Image' width="500" height="651" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Executive testimonial */}

            <div className='section'>
                <div className='section__wrapper site__width'>
                    <SectionHgroup 
                        sectionSubtitle="WHAT EXECUTIVES ARE SAYING"
                        sectionTitle="Executive testimonial"                     
                    />
                    <div className='testimonial'>
                        <div className='clientImg'>
                            <Image src="/images/Jose.jpg" alt='Client Image' width="200" height="200" />
                        </div>
                        <div className='clientFeedback'>
                            <p className=''>
                                “InvestorGate has developed a unique platform for experts to share their views on important company issues. Their approach is professional, well-researched and thorough. I would happily recommend them to my network”
                            </p>
                            <p className=''>
                                <strong>Jose M Herrera Perea</strong><br />
                                Executive and Director, former Google, SEEK, Fujitsu
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Faqs */}
            <div className='faqs--section section has--bg--gray has--bg'>
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="connecting experts to investors"
                            sectionTitle="Frequently asked questions"
                        />
                    </div>
                    <div className='faq__lists'>
                        <Accordion />
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