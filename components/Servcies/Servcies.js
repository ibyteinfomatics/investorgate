import Link from 'next/link';
import Header from '../Header/Header';
import Logoslider from '../Logoslider/Logoslider';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Sitebanner from '../Sitebanner/Sitebanner';
import FeedItems from '../Feeds/FeedItems';
import SectionHgroup from '../SectionHgroup/SectionHgroup';
import InfographicList from './ServciesList';
import ContactForm from '../ContactForm/Contact';


export default function Servcies() {
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
            <div className='style--banner servcies--banner' data-aos="fade-up">
                <Sitebanner 
                    bannerTitle="Leading the democratization of expert insights"
                    bannerText1="At InvestorGate, we understand the critical role primary research plays in understanding companies and building investment cases. That’s why we’re driving change in the expert network industry and helping expand the reach of expert insights. It’s our contribution to the sharing economy."
                    bannerButton="Contact Us"
                />
            </div>


            {/* Offer section */}
            <div className='two--column--section section has--no--bg' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <SectionHgroup 
                            sectionSubtitle="WHAT WE OFFER"
                            sectionTitle="Exclusive insights into the world’s leading companies"
                        />
                        <div className="section--content">
                            <p>InvestorGate is a digital content platform for the investment, corporate and education sectors. Our dual purpose is to create a better-connected industry and expanding the reach of expert insights to new audiences globally.</p>
                            <p>We publish interviews with industry executives for our community to learn and understand the strategies, operating models, economic and cultural characteristics of high-quality companies.</p>
                        </div>
                    </div>

                    <div className='section--column__content'>
                        <div className='section--content mt-3vh'>
                            <p>For investors, we offer the tools to improve your primary research and investment decision-making process.</p>
                            <ul className='content--list'>
                                <li>Exclusive expert interviews via our on-demand platform</li>
                                <li>High-quality global mid-caps for increased idea flow</li>
                                <li>Trusted, qualitative insights to make higher conviction decisions</li>
                                <li>Access to the most relevant experts through customer-sourcing</li>
                                <li>Calls with experts at a fraction of the cost of traditional networks</li>
                                <li>Best-in-class client experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Interview Content */}
            <div className='infographic--section section infographic--style-2' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="EXCLUSIVE CONTENT"
                            sectionTitle="InvestorGate produces four types of interview content:"
                        />
                    </div>
                    <div className='infographic__list' data-aos="fade-up" data-aos-duration="2000">
                        <InfographicList
                            infoIcon="/images/message-icon.svg"
                            infoTitle="InvestorGate-Led Interviews"
                            infoContent="As part of our commitment to ‘original content’, InvestorGate Analysts host and publish interviews with executives. These are usually in a structured, hour-long format with accessible and consumable insights for our members to watch, listen or read."
                        />

                        <InfographicList 
                            infoIcon="/images/multi-message-icon.svg"
                            infoTitle="Investor-Led Interviews"
                            infoContent="InvestorGate organises executive interviews which are led by our investor clients. Conversations are recorded, edited and posted to the site. InvestorGate provides technical support and guidance but is not involved in the interview itself. This format lends itself to investors asking their most burning questions about a company and hearing directly from the executive."
                        />

                        <InfographicList 
                            infoIcon="/images/text-message-icon.svg"
                            infoTitle="Industry Panel Forums"
                            infoContent="From time to time InvestorGate will bring together three to four industry experts and host a panel interview session. We will ask our members to submit questions in advance and an InvestorGate Analyst will relay these questions to the panel. Discussion points will include industry trends and disruptive forces, company-specific issues, government policy and regulation, and other relevant industry topics."
                        />

                        <InfographicList 
                            infoIcon="/images/analysis-icon.svg"
                            infoTitle="Post-Interview Analysis"
                            infoContent="InvestorGate produces independent analysis published exclusively for the site, providing a summary of key takeaways and weighing the various perspectives of experts featured in the interviews. The analysis is qualitative in nature and while we tend to avoid detailed financial modeling, we often refer to company financial statements and economic ratios to support our analysis. We aim to take a well-balanced view, evaluating both the bull and bear cases, and attempt to reduce biases as much as possible."
                        />
                    </div>
                </div>
            </div>


            {/* Commitment */}
            <div className='infographic--section section infographic--style-3' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="OUR Commitment"
                            sectionTitle="Trusted primary research for better decision making"
                        />
                    </div>
                    <div className='infographic__list' data-aos="fade-up" data-aos-duration="2000">
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


            {/* Contact Form section */}
            <div className='form--section section' data-aos="fade-up">
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