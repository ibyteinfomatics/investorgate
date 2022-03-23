import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLongArrowRight,
    faMessage,
    faShareAlt,
    faComments,
    faLineChart,
} from "@fortawesome/free-solid-svg-icons"

export default function Sitebanner(props){
    return(
        <div className='banner__wrapper'>
            <div className='banner__content'>
                <div className='banner__hgroup hgroup'>
                    <div className='banner__title title'>
                    {props.bannerTitle &&
                        <h3>{props.bannerTitle}</h3>
                    }
                    </div>
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
                        <Link href="#"><a><span>{props.bannerButton}</span> <FontAwesomeIcon icon={faLongArrowRight} /></a></Link>
                    </div>
                    }
                </div>
            </div>
            {props.bannerImage &&
                <div className='banner__right--image'>
                    <Image src={props.bannerImage} alt="Home banner" width="318" height="414" />
                </div>
            }
        </div>
    )
}