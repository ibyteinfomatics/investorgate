import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
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
                    <form className='cate__search--form'>
                        <h4 className='sidebar--title'>Search</h4>
                        <div className='form--item'>
                            <input className='form--control' id="email" placeholder='Emaail' type="email"></input>
                        </div>
                    </form>
                    
                    <div className='cate__lists--block'>
                        <h4 className='sidebar--title'>Categories</h4>
                        <ul className='cate__lists'>
                            <li className='active--cate'><Link href="/category/analysis"><a>Analysis</a></Link></li>
                            <li><Link href="#"><a>Company Coverage</a></Link></li>
                            <li><Link href="#"><a>Expert networks</a></Link></li>
                            <li><Link href="#"><a>Freemium</a></Link></li>
                        </ul>
                    </div>

                    <div className='cate__lists--block'>
                        <h4 className='sidebar--title'>Recent Posts</h4>
                        <ul className='cate__lists'>
                            <li className=''>
                                <Link href="#">
                                    <a>
                                        Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers
                                    </a>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="#">
                                    <a>
                                        Company Coverage: What type of companies make the cut?
                                    </a>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="#">
                                    <a>
                                        Expert Networks: What’s next for the industry?
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='cate__comment--block'>
                        <h4 className='sidebar--title'>Recent Posts</h4>                        
                        <p className='noCmnt'>No comments to show.</p>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}
