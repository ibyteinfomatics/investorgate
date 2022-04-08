import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

export default function Sitebanner(props){
    return(
        <div className='banner__wrapper'>
            <div className='banner__content'>
                <div className='banner__hgroup hgroup'>
                    {props.bannerTitle &&
                    <div className='banner__subtitle subtitle'>
                        <h3>{props.bannerSubtitle}</h3>
                    </div>
                    }
                    {props.bannerTitle &&
                    <div className='banner__title title'>
                        <h3>{props.bannerTitle}</h3>
                    </div>
                    }
                </div>
                <div className='banner__text'>
                    {props.bannerText1 &&
                        <p>{props.bannerText1}</p>
                    }
                    {props.bannerText2 &&
                        <p>{props.bannerText2}</p>
                    }
                    {props.bannerButton &&
                    <div className='banner__btn btn red--button'>
                        {props.bannerButtonLink ?
                        <Link href={props.bannerButtonLink}><a><span>{props.bannerButton}</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                        : <Link href="#"><a><span>{props.bannerButton}</span> <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                        }
                    </div>
                    }
                </div>
            </div>
            {props.bannerImage &&
            <div className='banner__right--image' data-aos='fade-in'>
                <Image src={props.bannerImage} alt="Home banner" layout="fill" quality={100} />
            </div>
            }
        </div>
    )
}