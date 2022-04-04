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
                {props.policyTermsTitle &&
                    <p><strong>{props.policyTermsTitle}</strong></p>
                }
                {props.sectionTitle &&
                    <p>{props.sectionTitle}</p>
                }
                {props.sectionCateTitle &&
                    <p className='cate__title'>{props.sectionCateTitle}</p>
                }
            </div>
            {props.sectionCateSubtitle &&
                <div className='subtitle section--subtitle'>
                    <h3 className='cate__subtitle'>{props.sectionCateSubtitle}</h3>
                </div>
            }
        </div>
    )
}