import React from 'react'
import Link from 'next/link'

export default function ContactForm() {
    return(
        <div className='contact__form'>
            <form>
                <div className='form__item--grid'>
                    <div className='form--item'>
                        <div className='form--label'>
                            <label form="name">Name <span className='required'>*</span></label>
                            <input className='form--control' id="name" placeholder='Name' type="text"></input>
                        </div>
                    </div>
                    <div className='form--item'>
                        <div className='form--label'>
                            <label form="email">Email <span className='required'>*</span></label>
                            <input className='form--control' id="email" placeholder='Emaail' type="email"></input>
                        </div>
                    </div>
                </div>
                <div className='form--item form--item--textarea'>
                    <div className='form--label'>
                        <label htmlFor="msg">Message <span className='required'>*</span></label>
                    </div>
                    <textarea className='form--control' placeholder='Message' id="msg"></textarea>
                </div>
                <div className='form--item form--item--checkbox'>
                    <div className='form--checkbox--label'>
                        <p>GDPR Consent</p>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" id="consent" />
                        <label htmlFor="consent">I consent to my data being used & stored according to our <Link href="#">Privacy Policy</Link></label>
                    </div>
                </div>
                <div className='form--actions'>
                    <button type="submit">Submit From</button>
                </div>
            </form>
        </div>
    )
}