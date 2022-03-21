import React from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import Logoslider from '../Logoslider/Logoslider';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLongArrowRight,
    faMessage,
    faShareAlt,
    faComments,
    faLineChart,
  } from "@fortawesome/free-solid-svg-icons";

export default function Home () {
    return(
        <React.Fragment>
            <Header />

            {/* Top Banner */}
            <div className='style--banner banner--style-1' data-aos="fade-up">
                <div className='banner__wrapper'>
                    <div className='banner__content'>
                        <div className='banner__hgroup hgroup'>
                            <div className='banner__title title'>
                                <h3>Qualitative insights on high-quality companies. Directly from executives.</h3>
                            </div>
                        </div>
                        <div className='banner__text'>
                            <p>As a leading provider of primary research, InvestorGate brings you interviews with executives from high-quality, public companies. We’re a trusted source of qualitative insights for investors and research professionals globally.</p>
                            <p>For updates on all the latest interviews and analysis, subscribe to our newslette</p>
                            <div className='banner__btn btn red--button'>
                                <Link href="#"><a><span>Subscribe</span> <FontAwesomeIcon icon={faLongArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className='banner__right--image'>
                        <img src="/images/ipad3.png" alt="Home banner" />
                    </div>
                </div>
                <Logoslider />
            </div>


            {/* Featured interviews */}
            <div className='feed--section section' data-aos="fade-up">
                <div className='section__wrapper site__width'> 
                    <div className='section--hgroup hgroup'>
                        <div className='subtitle section--subtitle'>
                            <h3>Exclusive Content</h3>
                        </div>
                        <div className='section--title title'>
                            <p>Featured articles</p>
                        </div>
                    </div>
                    
                    <div className='feed--lists'>
                        <div className='feed--items'>
                            <div className='feed--items--wrapper'>
                                <div className='feed--item--image'>
                                    <Link href='#'>
                                        <a>
                                            <img src='images/FI-1-1.jpg' alt='BlogImg' />
                                        </a>
                                    </Link>
                                </div>
                                <div className='feed--item--content'>
                                    <div className='feed--hgroup'>
                                        <div className='feed--logo'>
                                            <img src='images/IG-User-Logo.png' alt='Logo' />
                                        </div>                                
                                        <div className="feed--meta--text">
                                            <p className="meta--author">Posted by <strong>Investorgate</strong></p>
                                            <p className="meta--date">February 26, 2022</p>
                                        </div>
                                    </div>
                                    <div className='feed--text--wrap'>
                                        <div className="feed--category">                 
                                            <Link href='https://coacherly.com/category/analysis/'>
                                                <a className="category">Analysis, </a>
                                            </Link>
                                            <Link href='https://coacherly.com/category/freemium/'>
                                                <a className="category">Freemium.</a>
                                            </Link>
                                        </div>
                                        <div className='feed--text'>
                                            <h3 className="text--headline">
                                                <Link href="https://coacherly.com/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/">Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers</Link>
                                            </h3>
                                            <p className="text--content">Mark Leonard, the CEO of Constellation Software, famously...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='feed--items'>
                            <div className='feed--items--wrapper'>
                                <div className='feed--item--image'>
                                    <Link href='#'>
                                        <a>
                                            <img src='images/FI-2-1.jpg' alt='BlogImg' />
                                        </a>
                                    </Link>
                                </div>
                                <div className='feed--item--content'>
                                    <div className='feed--hgroup'>
                                        <div className='feed--logo'>
                                            <img src='images/IG-User-Logo.png' alt='Logo' />
                                        </div>                                
                                        <div className="feed--meta--text">
                                            <p className="meta--author">Posted by <strong>Investorgate</strong></p>
                                            <p className="meta--date">February 26, 2022</p>
                                        </div>
                                    </div>
                                    <div className='feed--text--wrap'>
                                        <div className="feed--category">                 
                                            <Link href='https://coacherly.com/category/company-coverage/'>
                                                <a className="category">Company Coverage, </a>
                                            </Link>
                                            <Link href='https://coacherly.com/category/freemium/'>
                                                <a className="category">Freemium.</a>
                                            </Link>
                                        </div>
                                        <div className='feed--text'>
                                            <h3 className="text--headline">
                                                <Link href="https://coacherly.com/couche-tard-the-impact-of-electric-vehicles/">Expert Networks: What’s next for the industry?</Link>
                                            </h3>
                                            <p className="text--content">Our company coverage focuses squarely on high-quality companies...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='feed--items'>
                            <div className='feed--items--wrapper'>
                                <div className='feed--item--image'>
                                    <Link href='#'>
                                        <a>
                                            <img src='images/FI-3-1.jpg' alt='BlogImg' />
                                        </a>
                                    </Link>
                                </div>
                                <div className='feed--item--content'>
                                    <div className='feed--hgroup'>
                                        <div className='feed--logo'>
                                            <img src='images/IG-User-Logo.png' alt='Logo' />
                                        </div>                                
                                        <div className="feed--meta--text">
                                            <p className="meta--author">Posted by <strong>Investorgate</strong></p>
                                            <p className="meta--date">February 26, 2022</p>
                                        </div>
                                    </div>
                                    <div className='feed--text--wrap'>
                                        <div className="feed--category">                   
                                            <Link href='https://coacherly.com/category/expert-networks/'>
                                                <a className="category">Expert networks, </a>
                                            </Link>
                                            <Link href='https://coacherly.com/category/freemium/'>
                                                <a className="category">Freemium.</a>
                                            </Link>
                                        </div>
                                        <div className='feed--text'>
                                            <h3 className="text--headline">
                                                <Link href="https://coacherly.com/couche-tard-the-impact-of-electric-vehicles/">Expert Networks: What’s next for the industry?</Link>
                                            </h3>
                                            <p className="text--content">I’ve always worked for media agencies, across my...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Why Use Us */}
            <div className='style--banner banner--style-2' data-aos="fade-up">
                <div className='banner__wrapper'>
                    <div className='banner__content'>
                        <div className='section--hgroup hgroup'>
                            <div className='section--subtitle subtitle'>
                                <h3>Why Use us</h3>
                            </div>
                            <div className='section--title title'>
                                <p>Fundamental, qualitative insights driving better decisions</p>
                            </div>
                        </div>
                        <div className='banner__text'>
                            <p>InvestorGate’s purpose is to improve access to primary research and drive better investment decisions. That means giving you faster access to experts, more relevant insights, better idea generation and high-conviction investment theses.</p>
                            <p>Our company coverage is designed for the needs of our clients: fundamental investors with long time horizons and business ownership mindsets. Discover why some of the leading fund managers, research houses, retail investors and business schools use our platform for their primary research.</p>
                            <div className='banner__btn btn red--button'>
                            <Link href="#"><a><span>Learn More</span> <FontAwesomeIcon icon={faLongArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* What We Do */}
            <div className='infographic--section section' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--hgroup hgroup'>
                        <div className='section--subtitle subtitle'>
                            <h3>What we do</h3>
                        </div>
                        <div className='section--title title'>
                            <p>Understand some of the <br />world’s leading companies</p>
                        </div>
                    </div>
                    <div className='section--content'>
                        <p>We organise and produce interviews with company executives to gain insights on the strategies, operating models, economic and cultural characteristics of high-quality companies.</p>
                        <p>Our primary research focuses on public companies listed on the major world stock markets with a tendency towards global mid-caps. We publish content in four formats:</p>
                    </div>
                    <div className='infographic__list'>
                        <div className='infographic__list--item'>
                            <div className='infographic__header'>
                                <div className='infographic__icon'>
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                                <div className='infographic__title'>
                                    <h3>InvestorGate-Led Interviews</h3>
                                </div>
                            </div>
                            <div className='infographic__content'>
                                <p>InvestorGate Analysts host and publish interviews directly with executives.</p>
                            </div>
                        </div>
                        
                        <div className='infographic__list--item'>
                            <div className='infographic__header'>
                                <div className='infographic__icon'>
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                                <div className='infographic__title'>
                                    <h3>Investor-Led Interviews</h3>
                                </div>
                            </div>
                            <div className='infographic__content'>
                                <p>InvestorGate investment partners conduct interviews with experts and share with the community.</p>
                            </div>
                        </div>                        
                        
                        <div className='infographic__list--item'>
                            <div className='infographic__header'>
                                <div className='infographic__icon'>
                                    <FontAwesomeIcon icon={faShareAlt} />
                                </div>
                                <div className='infographic__title'>
                                    <h3>Industry Panel Interviews</h3>
                                </div>
                            </div>
                            <div className='infographic__content'>
                                <p>Panel of executives and industry experts hosted by an InvestorGate Analyst for broader discussion.</p>
                            </div>
                        </div>                        
                        
                        <div className='infographic__list--item'>
                            <div className='infographic__header'>
                                <div className='infographic__icon'>
                                    <FontAwesomeIcon icon={faLineChart} />
                                </div>
                                <div className='infographic__title'>
                                    <h3>Post-Interview Analysis</h3>
                                </div>
                            </div>
                            <div className='infographic__content'>
                                <p>InvestorGate analysis report combining insights & perspectives from our various content features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Executives section */}
            <div className='two--column--section section has--bg' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <div className='section--hgroup hgroup'>
                            <div className='subtitle section--subtitle'>
                                <h3>For Executives</h3>
                            </div>
                            <div className='section--title title'>
                                <p>Your expertise travels further than you</p>
                            </div>
                        </div>
                        <div class="section--content">
                            <p>We partner with experts like you for knowledge-sharing and networking opportunities.</p>
                            <p>If you’re an executive interested in building your profile, sharing your knowledge, and joining a fast-growing expert network, apply today to become part of our community.</p>
                            <div className='btn red--button'>
                            <Link href="#"><a><span>Join Now</span> <FontAwesomeIcon icon={faLongArrowRight} /></a></Link>
                            </div>
                        </div>
                    </div>

                    <div className='section--column__content white-bg'>
                        <div className='meta--header'>
                            <div className='meta--author--image'>
                                <img src='images/author.png' alt='AuthorImg' />
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
            <div className='two--column--section section has--bg subscribe__bg' data-aos="fade-up">
                <div className='section__wrapper site__width'>
                    <div className='section--column__content'>
                        <div className='section--hgroup hgroup'>
                            <div className='subtitle section--subtitle'>
                                <h3>Subscribe</h3>
                            </div>
                            <div className='section--title title'>
                                <p>Sign up for executive interviews, in-depth analysis and expert networking</p>
                            </div>
                        </div>
                    </div>

                    <div className='section--column__content'>
                        <div className='section--content'>
                            <p>Our team of dedicated analysts is consistently striving to bring you new ideas and content to enrich your investment decisions.</p>
                            <p>Sign up today for exclusive access to all InvestorGate content and services.</p>
                            <div className='btn red--button'>
                                <Link href="#"><a><span>Subscribe</span> <FontAwesomeIcon icon={faLongArrowRight} /></a></Link>
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