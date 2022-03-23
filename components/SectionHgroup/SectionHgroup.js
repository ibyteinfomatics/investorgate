import React from 'react'

export default function SectionHgroup(props){
    return(
        <div className='section--hgroup hgroup'>
            <div className='subtitle section--subtitle'>
                {props.sectionSubtitle &&
                    <h3>{props.sectionSubtitle}</h3>
                }
            </div>
            <div className='section--title title'>
                {props.sectionTitle &&
                    <p>{props.sectionTitle}</p>
                }
            </div>
        </div>
    )
}