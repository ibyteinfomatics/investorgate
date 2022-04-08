import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sitebanner from '../Sitebanner/Sitebanner';
import SectionHgroup from '../SectionHgroup/SectionHgroup';
import ContactForm from '../ContactForm/Contact';
import InfographicList from './ServicesList';


export default function ServicesPage() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            duration: 1200,
          });
        },[]);
    return (
        <React.Fragment>
            <Header />

            {/* Top Banner */}
            <div className='style--banner servcies--banner'>
                <Sitebanner 
                    bannerTitle="Improving executive access for the investment industry"
                    bannerText1="At InvestorGate, we understand the critical role primary research plays in understanding companies and building investment cases. That’s why we’re driving change in the expert network industry and increasing the accessibility of expert insights."
                    bannerButton="Contact Us"
                />
            </div>


            {/* Offer section */}
            <div className='two--column--section section has--no--bg'>
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <SectionHgroup 
                            sectionSubtitle="WHAT WE OFFER"
                            sectionTitle="Exclusive insights into the world’s leading companies"
                        />
                        <div className="section--content">
                            <p>InvestorGate has a dual purpose of creating a better-connected industry and expanding the reach of expert insights. We partner with fundamental, long term investors and bottom-up stock pickers to facilitate deeper qualitative insights as part of their research process.</p>
                            <p>We publish interviews with industry executives for our community to better understand the business models, competitive advantages, unit economics, cultural attributes and ESG practices of high-quality companies.</p>
                        </div>
                    </div>

                    <div className='section--column__content'>
                        <div className='section--content mt-3vh'>
                            <p>For investors, we offer the tools to improve your primary research and investment decision-making process.</p>
                            <ul className='content--list'>
                                <li>Expert interviews via our on-demand platform</li>
                                <li>High-quality global mid-caps for increased idea flow</li>
                                <li>Trusted, qualitative insights for high conviction decisions</li>
                                <li>ESG investment analysis and insights</li>
                                <li>Access to the most relevant experts through custom-sourcing</li>
                                <li>Calls with experts at a fraction of the cost of traditional networks</li>
                                <li>Best-in-class client experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Interview Content */}
            <div className='infographic--section section infographic--style-2'>
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="EXCLUSIVE CONTENT"
                            sectionTitle="InvestorGate produces four types of interview content:"
                        />
                    </div>
                    <div className='infographic__list'>
                        <InfographicList
                            infoIcon="/images/message-icon.svg"
                            infoTitle="InvestorGate Interviews"
                            infoContent="As part of our commitment to ‘original content’, InvestorGate Analysts host and publish interviews with executives. These are structured, hour-long interviews with accessible and consumable insights for our members to watch, listen or read."
                        />

                        <InfographicList 
                            infoIcon="/images/multi-message-icon.svg"
                            infoTitle="Investor-led Interviews"
                            infoContent="InvestorGate organises executive interviews which are led by our clients, professional investors. Conversations are recorded, edited and posted to the site. InvestorGate provides support but leaves the questions exclusively to the discretion of investors."
                        />

                        <InfographicList 
                            infoIcon="/images/text-message-icon.svg"
                            infoTitle="Industry Panels"
                            infoContent="From time to time InvestorGate brings together three to four industry experts and host a panel interview session. We will ask our members to submit questions in advance and an InvestorGate Analyst will relay these questions to the panel. Discussion points will include industry trends and disruptive forces, ESG and sustainability, government policy and regulation, and other relevant industry topics."
                        />

                        <InfographicList 
                            infoIcon="/images/analysis-icon.svg"
                            infoTitle="Post-Interview Analysis"
                            infoContent="InvestorGate produces independent analysis published exclusively for the site, providing a summary of key takeaways and weighing the various expert opinions shared during the interviews. While we leave the detailed financial analysis and modelling to others, we still use fundamentals to support our qualitative insights. We aim to take a well-balanced neutral view on each company, evaluating both the bull and bear cases and reducing biases where possible."
                        />
                    </div>
                </div>
            </div>


            {/* Commitment */}
            <div className='infographic--section section infographic--style-3'>
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="OUR Commitment"
                            sectionTitle="Trusted primary research for better decision making"
                        />
                    </div>
                    <div className='infographic__list' data-aos="fade-up">
                        <InfographicList 
                            infoIcon="/images/file-icon.svg"
                            infoTitle="Content Library"
                            infoContent="Through our exclusive content library of interviews, clients can quickly access expert insight on a range of public companies."
                        />

                        <InfographicList 
                            infoIcon="/images/share-icon.svg"
                            infoTitle="Expert Network"
                            infoContent="We custom-source experts for client’s and facilitate interviews with the most relevant experts available."
                        />

                        <InfographicList 
                            infoIcon="/images/comp-icon.svg"
                            infoTitle="Shared Knowledge"
                            infoContent="Learn from other top investors through a shared-knowledge platform and community that keeps giving."
                        />
                    </div>
                </div>
            </div>

            {/* Speech Banner */}
            <div className='style--banner speech--banner'>
                <Sitebanner 
                    bannerSubtitle="ACADEMIA"
                    bannerTitle="Partnering with leading academic institutions"
                    bannerText1="We work closely with many top universities, colleges and business schools to ensure students can benefit from the InvestorGate platform."
                    bannerText2="If you’re a professor, student, or staff member please get in touch to discuss how we can work with your institution."
                />
                <div className='logo__wrapper site__width'>
                    <div className='banner__logo--lists'>
                        <ul>
                            {/* <li>
                                <Link href="https://www.nottingham.ac.uk/"><a target="_blank">
                                    <Image src="/images/un--logo.png" alt="Banner Logo" layout="fill" quality={100} />
                                </a></Link>
                            </li>
                            <li>
                                <Link href="https://bond.edu.au/"><a target="_blank">
                                    <Image src="/images/bu--logo.png" alt="Banner Logo" layout="fill" quality={100} />
                                </a></Link>
                            </li>
                            <li>
                                <Link href="https://www.hec.edu/en/mba-programs/executive-mba"><a target="_blank">
                                    <Image src="/images/hec--logo.png" alt="Banner Logo" layout="fill" quality={100} />
                                </a></Link>
                            </li>
                            <li>
                                <Link href="https://www.aston.ac.uk/bss/aston-business-school"><a target="_blank">
                                    <Image src="/images/abs--logo.png" alt="Banner Logo" layout="fill" quality={100} />
                                </a></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>


            {/* Contact Form section */}
            <div className='form--section section'>
                <div className='section__wrapper site__width'>
                    <SectionHgroup 
                        sectionSubtitle="Investorgate"
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