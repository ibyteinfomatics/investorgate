import Head from "next/head";
// import Link from "next/link";
import { elastic as Menu } from 'react-burger-menu';
// import $ from 'jquery';
// import React, { useEffect } from "react";
// import { ReactDOM } from "react";
import Link from 'next/link';
import $ from 'jquery';
import Image from 'next/image';
import React, { Fragment, useEffect } from "react";
export default function Header(){

    useEffect(() => {
        $(document).ready(function () {
          $(window).scroll(function () {
            if ($(document).scrollTop() > 150) {
              $(".desktop__header").addClass("scrollSticky");
            } else {
              $(".desktop__header").removeClass("scrollSticky");
            }
            if ($(document).scrollTop() > 300) {
              $(".desktop__header").addClass("addScroll");
            } else {
              $(".desktop__header").removeClass("addScroll");
            }
          });

          var cursor = $(".cursor");

        $(window).mousemove(function(e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
        });

        $(window)
            .mouseleave(function() {
                cursor.css({
                    opacity: "0"
                });
            })
            .mouseenter(function() {
                cursor.css({
                    opacity: "1"
                });
            });

        $("a")
            .mouseenter(function() {
                cursor.addClass("cursor--link");
            })
            .mouseleave(function() {
                cursor.removeClass("cursor--link");
            });

        $(window)
            .mousedown(function() {
                cursor.css({
                    transform: "scale(.2)"
                });
            })
            .mouseup(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });

        });
      }, []);
    return(
        <React.Fragment>
            <div className="cursor"></div>
            <div className="desktop__header header__wrapper">
                <div className="header__wrap--inner">
                    <div className="header__left">
                        <div className="site__logo">
                            <Link className="logo__link"  href="/">
                                <Image src="/images/IG-Logo.png" alt="Invertor Gate" width="240" height="80" />
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
                                © 2022, InvestorGate LTD. Company no: <Link href="https://find-and-update.company-information.service.gov.uk/company/12913657" target="_blank">12913657</Link> | Designed By <Link href="https://dotcoms.co.uk" target="_blank">DotComs</Link><br /><Link href="https://coacherly.com/privacy-policy/">Privacy &amp; Cookie Policy</Link> | <Link href="https://coacherly.com/terms-conditions/">Terms of Service</Link> | <Link href="https://coacherly.com/executive-terms-of-engagement/">Executive Terms of Engagement</Link> | <Link href="https://coacherly.com/compliance-policy-and-process/">Compliance Policy &amp; Process</Link> 
                            </div>
                        </Menu>
                        <div className="site__logo">
                            <Link className="logo__link"  href="/">
                                <Image src="/images/IG-Logo.png" alt="Invertor Gate" width="80" height="35" />
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