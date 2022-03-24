import React from 'react'
import Image from 'next/image'

export default function InfographicList(props) {
    return(
        <div className='infographic__list--item'>
            <div className='infographic__header'>
                <div className='infographic__icon'>
                    <Image src={props.infoIcon} alt="Info icon" width="42" height="42" />
                </div>
                <div className='infographic__title'>
                    <h3>{props.infoTitle}</h3>
                </div>
            </div>
            <div className='infographic__content'>
                <p>{props.infoContent}</p>
            </div>
        </div>
    )
}