import Head from "next/head";
import Link from "next/link";
import { elastic as Menu } from 'react-burger-menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import $ from 'jquery';
import React, { useEffect } from "react";
export default function Header(){

    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          duration: 1200,
        });
      }, []);
    // useEffect(() => {
    //     $(document).ready(function () {
    //       $(window).scroll(function () {
    //         if ($(document).scrollTop() > 5) {
    //           $("body").addClass("addScroll");
    //         } else {
    //           $("body").removeClass("addScroll");
    //         }
    //       });
    //     });
    //   },);
    return(
        <React.Fragment>
            <Head>
                <title>Investor Gate</title>
                <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="desktop__header header__wrapper">
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <div className="site__logo">
                            <Link className="logo__link"  href="/">
                                <img src="/images/IG-Logo.png" alt="Invertor Gate" />
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <nav className="site__navigation">
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/">Services</Link>
                                </li>
                                <li>
                                    <Link href="/">Interviews</Link>
                                </li>
                                <li>
                                    <Link href="/">For Executives</Link>
                                </li>
                                <li>
                                    <Link href="/">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                            <div className="subscribe__btn btn">
                                <Link href="#">Subscribe </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Header Wrapper */}
            <div className="mobile__header header__wrapper">
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <Menu left>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a className='active'>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Servcies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Interviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="For Executives">
                                        <a>For Executives</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="copyright">
                                © 2022, InvestorGate LTD. Company no: <a href="https://find-and-update.company-information.service.gov.uk/company/12913657" target="_blank">12913657</a> | Designed By <a href="https://dotcoms.co.uk" target="_blank">DotComs</a><br /><a href="https://coacherly.com/privacy-policy/">Privacy &amp; Cookie Policy</a> | <a href="https://coacherly.com/terms-conditions/">Terms of Service</a> | <a href="https://coacherly.com/executive-terms-of-engagement/">Executive Terms of Engagement</a> | <a href="https://coacherly.com/compliance-policy-and-process/">Compliance Policy &amp; Process</a> 
                            </div>
                        </Menu>
                        <div className="site__logo">
                            <Link className="logo__link"  href="/">
                                <img src="/images/IG-Logo.png" alt="Invertor Gate" />
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <nav className="site__navigation">
                            <div className="subscribe__btn btn red--button">
                                <Link href="#">Subscribe</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}