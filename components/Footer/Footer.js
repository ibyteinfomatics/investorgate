import Link from 'next/dist/client/link'
import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <div className='siteFooter sectionWrapper'>
                <div className='section__wrapper site__width'>
                    <div className='divideFooter'>
                        <div className='footerCol'>
                            <div className='footerLogo'>
                                <img src='/images/IG-Footer-Logo.png' alt='Footer Logo' />
                            </div>
                            <p>
                                InvestorGate is a leading provider of primary research, bringing you interviews with executives from high-quality companies.
                            </p>
                        </div>
                        <div className='footerCol'>
                            <h3 className="title widget-title">Location</h3>
                            <ul>
                                <li>
                                    <div className="textwidget custom-html-widget">71-75 Shelton Street
                                        <br />
                                        London
                                        <br />
                                        WC2H 9JQ
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='footerCol'>
                            <h3 className="title widget-title">Social</h3>
                            <ul className='socialIcon'>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="images/fb.png" alt='Facebook' />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="images/twitter.png" alt='Twitter' />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="images/linkdin.png" alt='Linkdin' />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="images/youtube.png" alt='Facebook' />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="images/google-plus.png" alt='Facebook' />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footerCol'>
                            <h3 className="title widget-title">Menu</h3>
                            <ul>
                                <li>
                                    <Link href='#'><a>Home</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>About</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>For Executives</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>For Clients</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>Interviews</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>Blog</a></Link>
                                </li>
                                <li>
                                    <Link href='#'><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="site-info-holder ">
                        <div className="left">© 2022, InvestorGate LTD. Company no:
                            <a href="https://find-and-update.company-information.service.gov.uk/company/12913657" target="_blank">12913657</a> | Designed By <a href="https://dotcoms.co.uk" target="_blank">DotComs</a>
                            <br />
                            <a href="https://coacherly.com/privacy-policy/">Privacy &amp; Cookie Policy</a> |
                            <a href="https://coacherly.com/terms-conditions/">Terms of Service</a> |
                            <a href="https://coacherly.com/executive-terms-of-engagement/">Executive Terms of Engagement</a> |
                            <a href="https://coacherly.com/compliance-policy-and-process/">Compliance Policy &amp; Process</a>								</div>
                        <div className="right">
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
