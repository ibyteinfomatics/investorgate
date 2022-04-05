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
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Sitebanner from '../Sitebanner/Sitebanner';
import FeedItems from '../Feeds/FeedItems';
import InfographicList from '../Services/ServicesList';
import SectionHgroup from '../SectionHgroup/SectionHgroup';


export default function Home() {
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
            <div className='style--banner banner--style-1'>
                <Sitebanner 
                    bannerTitle="Qualitative insights on high-quality companies. Expertly delivered."
                    bannerText1="As a leading provider of primary research, InvestorGate brings you interviews with executives from high-quality, public companies. We’re a trusted source of qualitative insights for investors and research professionals globally."
                    bannerText2="For updates on all the latest interviews and analysis, subscribe to our newsletter."
                    bannerImage="/images/ipad3.png"
                    bannerButton="Subscribe"
                />
                <div className='slider__wrapper site__width'>
                    <div className='banner__logo--slider'>
                        <div className='slider__title'>
                            <h5>With Executives From</h5>
                        </div>
                        <Logoslider />
                    </div>
                </div>
            </div>


            {/* What We Do */}
            <div className='infographic--section section'>
                <div className='section__wrapper site__width'>
                    <div className='section--small-width'>
                        <SectionHgroup 
                            sectionSubtitle="What we do"
                            sectionTitle="Understand some of the world’s leading companies"
                        />
                    </div>
                    
                    <div className='section--content'>
                        <p>We produce interviews with executives to gain insights on the fundamental characteristics of high-quality companies. Our coverage centres on public companies listed on the world’s largest stock markets with a preference for global mid-caps.</p>
                        <p>Interviewing executives provides arguably the best insight on the inner workings of companies; information that isn’t available in company filings or analyst reports. In the interviews we focus on four key company characteristics:</p>
                    </div>
                    <div className='infographic__list infographic__list--style-1' data-aos="fade-up" data-aos-duration="2000">
                        <InfographicList 
                            infoIcon="/images/message-icon.svg"
                            infoTitle="Business Model & Competitive Advantages"
                            infoContent="Analysing the full value chain of a company’s operations, its earnings power and durability of core competitive advantages"
                        />

                        <InfographicList 
                            infoIcon="/images/multi-message-icon.svg"
                            infoTitle="Unit Economics"
                            infoContent="Breakdown of revenues and costs on a per unit basis, which enables a better understanding and analysis of gross margins"
                        />

                        <InfographicList 
                            infoIcon="/images/share-icon.svg"
                            infoTitle="Leadership & Culture"
                            infoContent="Leadership, talent and culture factors are increasingly important in determining companies performance in today’s knowledge economy"
                        />

                        <InfographicList 
                            infoIcon="/images/analysis-icon.svg"
                            infoTitle="ESG Practices"
                            infoContent="Improving sustainability and ESG practices are widely accepted as both beneficial to company stakeholders and a driver of long-term value creation"
                        />
                    </div>
                </div>
            </div>


            {/* Why Use Us */}
            <div className='style--banner banner--style-2'>
                <div className='banner__wrapper'>
                    <div className='banner__content'>
                        <SectionHgroup 
                            sectionSubtitle="Why Use us"
                            sectionTitle="Fundamental, qualitative insights driving better decisions"
                        />
                        
                        <div className='banner__text'>
                            <p>InvestorGate’s purpose is to improve access to primary research and drive better investment decisions. That means giving you faster access to experts, increased idea generation, high-conviction investment theses and unrivalled ESG insights.</p>
                            <p>Our company coverage is designed for the needs of our clients: fundamental investors with long time horizons and business ownership mindsets. Discover why some of the leading fund managers, research houses, retail investors and business schools use our platform for their primary research.</p>
                            <div className='banner__btn btn red--button'>
                                <Link href="#"><a><span>Learn More</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured interviews */}
            <div className='feed--section section'>
                <div className='section__wrapper site__width'>
                    <SectionHgroup 
                        sectionSubtitle="Exclusive Content"
                        sectionTitle="Featured articles"
                    />

                    <div className='feed--lists' data-aos="fade-up" data-aos-duration="2000">
                        <FeedItems 
                            blogImg="/images/FI-1-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="/analysis/"
                            cate1="Analysis"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/"
                            headline="Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers"
                            feedText="Mark Leonard, the CEO of Constellation Software, famously..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-2-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="https://coacherly.com/category/company-coverage/"
                            cate1="Company Coverage"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/company-coverage-what-type-of-companies-make-the-cut/"
                            headline="Company Coverage: What type of companies make the cut?"
                            feedText="Our company coverage focuses squarely on high-quality companies..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-3-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="https://coacherly.com/category/expert-networks/"
                            cate1="Expert networks"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/couche-tard-the-impact-of-electric-vehicles/"
                            headline="Expert Networks: What’s next for the industry?"
                            feedText="I’ve always worked for media agencies, across my..."
                        />
                    </div>
                    
                </div>
            </div>


            {/* Sustainability */}
            <div className='style--banner banner--style-3'>
                <div className='banner__wrapper'>
                    <div className='banner__content'>
                        <SectionHgroup 
                            sectionSubtitle="Sustainability"
                            sectionTitle="Leading the ESG conversation"
                        />
                        
                        <div className='banner__text'>
                            <p>To meet the growing need for environmental, social and governance (ESG) research, we are leveraging our interview platform for conversations on all related topics from emissions to community relations to data security.</p>
                            <p>For investors, ESG risk ratings alone are not enough; it’s vital to understand the views of corporate leaders on the most pressing sustainability issues.</p>
                            <div className='banner__btn btn red--button'>
                                <Link href="#"><a><span>Find Out More</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Executives section */}
            <div className='two--column--section section has--bg'>
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <SectionHgroup 
                            sectionSubtitle="For Executives"
                            sectionTitle="Your expertise travels further than you"
                        />
                        
                        <div className="section--content">
                            <p>We partner with experts like you for knowledge-sharing and networking opportunities.</p>
                            <p>If you’re an executive interested in building your profile, sharing your knowledge, and joining a fast-growing expert network, apply today to become part of our community.</p>
                            <div className='btn red--button'>
                                <Link href="#"><a><span>Join Now</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>

                    <div className='section--column__content white-bg'>
                        <div className='meta--header'>
                            <div className='meta--author--image'>
                                <Image src='/images/author.png' alt='AuthorImg' width="60" height="60" />
                            </div>
                            <div className='section--content'>
                                <blockquote>
                                    <h6 className='blockquote__title'>Professional, well-researched and thorough!</h6>
                                    <p>“InvestorGate has developed a unique platform for experts to share their views on important company issues.</p>
                                    <p>Their approach is professional, well-researched and thorough. I would happily recommend them to my network”</p>
                                </blockquote>
                                <div className='meta--author'>
                                    <p className='author--name'>Jose M Herrera Perea</p>
                                    <p className='author-desi'>Executive and Director, former Google, SEEK, Fujitsu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Subscribe section */}
            <div className='two--column--section section has--bg subscribe__bg'>
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <SectionHgroup 
                            sectionSubtitle="Subscribe"
                            sectionTitle="Sign up for executive interviews, in-depth analysis and expert networking"
                        />
                    </div>

                    <div className='section--column__content'>
                        <div className='section--content'>
                            <p>Our team of dedicated analysts is consistently striving to bring you new ideas and content to enrich your investment decisions.</p>
                            <p>Sign up today for exclusive access to all InvestorGate content and services.</p>
                            <div className='btn red--button'>
                                <Link href="#"><a><span>Subscribe</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}