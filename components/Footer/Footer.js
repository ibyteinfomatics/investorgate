import Link from 'next/dist/client/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <React.Fragment>
            <div className='siteFooter section has--bg'>
                <div className='section__wrapper site__width'>
                    <div className='divideFooter'>
                        <div className='footerCol'>
                            <div className='footerLogo'>
                                <Image src='/images/IG-Footer-Logo.png' alt='Footer Logo' width="240" height="44" />
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
                                            <Image src="/images/fb.png" alt='Facebook' width="32" height="32" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Image src="/images/twitter.png" alt='Twitter' width="32" height="32" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Image src="/images/linkdin.png" alt='Linkdin' width="32" height="32" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Image src="/images/youtube.png" alt='Facebook' width="32" height="32" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Image src="/images/google-plus.png" alt='Facebook' width="32" height="32" />
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
                            <Link href="https://find-and-update.company-information.service.gov.uk/company/12913657" target="_blank"><a>12913657</a></Link> | Designed By <Link href="https://dotcoms.co.uk" target="_blank"><a>DotComs</a></Link>
                            <br />
                            <Link href="https://coacherly.com/privacy-policy/"><a>Privacy &amp; Cookie Policy</a></Link> | <Link href="https://coacherly.com/terms-conditions/"><a>Terms of Service</a></Link> | <Link href="https://coacherly.com/executive-terms-of-engagement/"><a>Executive Terms of Engagement</a></Link> | <Link href="https://coacherly.com/compliance-policy-and-process/"><a>Compliance Policy &amp; Process</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
