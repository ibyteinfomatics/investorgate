import React, {useEffect} from 'react'
import Contact from '../components/ContactForm/ContactPage'

export default function ContactPage() {
    useEffect(() =>{
        document.body.classList.add("contact__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("blog__page")
        document.body.classList.remove("category__page")
    },[]);
    return(
        <Contact />
    )
}