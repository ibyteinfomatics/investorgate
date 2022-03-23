import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function FeedItems(props){
    return(
        <>
            <div className='feed--items'>
                <div className='feed--items--wrapper'>
                    {props.blogImg &&
                    <div className='feed--item--image'>
                        <Image src={props.blogImg} alt='BlogImg' width="1244" height="410" />
                    </div>
                    }
                    <div className='feed--item--content'>
                        <div className='feed--hgroup'>
                            {props.feedLogo &&
                            <div className='feed--logo'>
                                <Image src={props.feedLogo} alt='Logo' width="48" height="48" />
                            </div>
                            }
                            <div className="feed--meta--text">
                                {props.metaDesc &&
                                    <p className="meta--desc">{props.metaDesc}</p>    
                                }
                                {props.authorName &&
                                <p className="meta--author">Posted by <strong>{props.authorName}</strong></p>
                                }
                                {props.feedDate &&
                                <p className="meta--date">{props.feedDate}</p>
                                }
                            </div>
                        </div>
                        <div className='feed--text--wrap'>
                            <div className="feed--category">
                                {props.cate1 &&
                                <Link href={props.cate1Link}>
                                    <a className="category">{props.cate1}, </a>
                                </Link>
                                }
                                {props.cate2 &&
                                <Link href={props.cate2Link}>
                                    <a className="category">{props.cate2}.</a>
                                </Link>
                                }
                            </div>
                            <div className='feed--text'>
                                {props.headline &&
                                <h3 className="text--headline">
                                    <Link href={props.headlineLink}>{props.headline}</Link>
                                </h3>
                                }
                                {props.feedText &&
                                <p className="text--content">{props.feedText}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}