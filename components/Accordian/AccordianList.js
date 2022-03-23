import React from 'react'
import Link from 'next/link'

export default function AccordianList(props) {
    return(
        <li>
            <div className='accor-head'>
                <p>{props.accordTitle}</p>
            </div>
            <div className='accor-data'>
                {props.accordData &&
                    <p>{props.accordData}</p>
                }
                {props.accordLists &&
                    <React.Fragment>
                    <h3>{props.accordsubTitle}</h3>
                    <ul>
                        <li>{props.accordlistData}</li>
                        <li>{props.accordlistData1}</li>
                        <li>{props.accordlistData2}</li>
                    </ul>
                    <h3>{props.accordsubTitle1}</h3>
                    <ul>
                        <li>{props.accordlistData3}</li>
                        <li>{props.accordlistData4}</li>
                    </ul>
                    <h3>{props.accordsubTitle2}</h3>
                    <p>{props.accordData5} <span><Link href={props.accordDataLinksrc}>{props.accordDataLink}</Link></span></p>
                    </React.Fragment>
                }
            </div>
        </li>
    )
}