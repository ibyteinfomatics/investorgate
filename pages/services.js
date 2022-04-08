import React, {useEffect} from 'react'
import ServicesPage from '../components/Services/ServicesPage'

export default function Services() {
    useEffect(() => {
        document.body.classList.add("services__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("blog__page")
        document.body.classList.remove("category__page")
        document.body.classList.remove("posts__page")
        document.body.classList.remove("subscribe__page")
      }, []);
    return (
        <ServicesPage />
    )
}