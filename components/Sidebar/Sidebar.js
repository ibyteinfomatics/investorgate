import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    return (
        <React.Fragment>
            <div className='pageSidebar bg-gray'>
                <div className='sidebar_form'>
                    <h4 className='formTitle'>Subscribe</h4>
                    <p className='sidebar_form--desc'>
                        Sign up today for exclusive access to all InvestorGate content and services.
                    </p>
                    <form className='formContent'>
                        <div className='form--item'>
                            <input className='form--control' id="name" placeholder='Name' type="text"></input>
                        </div>
                        <div className='form--item'>
                            <input className='form--control' id="email" placeholder='Emaail' type="email"></input>
                        </div>
                        <div className='form--item form--item--checkbox'>
                            <input type="checkbox" id="consent" />
                            <label htmlFor="consent">I consent to my data being used & stored according to our <Link href="#">Privacy Policy</Link></label>
                        </div>
                        <div className="form--actions">
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <form className='cate__search--form'>
                    <h4 className='sidebar--title'>Search</h4>
                    <div className='form--item'>
                        <input className='form--control' id="email" placeholder='Emaail' type="email"></input>
                    </div>
                </form>
                
                <div className='cate__lists--block'>
                    <h4 className='sidebar--title'>Categories</h4>
                    <ul className='cate__lists'>
                        <li className={router.pathname == "/analysis" ? "active--cate" : ""}><Link href="/analysis"><a>Analysis</a></Link></li>
                        <li className={router.pathname == "/company-coverage" ? "active--cate" : ""}><Link href="/company-coverage"><a>Company Coverage</a></Link></li>
                        <li className={router.pathname == "/esg" ? "active--cate" : ""}><Link href="/esg"><a>ESG</a></Link></li>
                        <li className={router.pathname == "/expert-networks" ? "active--cate" : ""}><Link href="/expert-networks"><a>Expert networks</a></Link></li>
                        <li className={router.pathname == "/freemium" ? "active--cate" : ""}><Link href="/freemium"><a>Freemium</a></Link></li>
                    </ul>
                </div>

                <div className='cate__lists--block cate__post--block'>
                    <h4 className='sidebar--title'>Recent Posts</h4>
                    <ul className='cate__lists'>
                        <li className=''>
                            <Link href="/post-esg">
                                <a target="_blank">
                                    ESG In Focus: 9 Questions Investors Should Ask CEOs
                                </a>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href="https://investorgate.co/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/">
                                <a target="_blank">
                                    Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers
                                </a>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href="https://investorgate.co/company-coverage-what-type-of-companies-make-the-cut/">
                                <a target="_blank">
                                    Company Coverage: What type of companies make the cut?
                                </a>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href="https://investorgate.co/expert-networks-whats-next-for-the-industry/">
                                <a target="_blank">
                                    Expert Networks: What’s next for the industry?
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div className='cate__comment--block'>
                    <h4 className='sidebar--title'>Recent Comments</h4>                        
                    <p className='noCmnt'>No comments to show.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
