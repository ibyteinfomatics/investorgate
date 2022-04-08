import React, {useEffect} from 'react'
import Subscribe from '../components/Subscribe/Subscribe'

export default function SubscribePage() {
    useEffect(() => {
        document.body.classList.add("subscribe__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("blog__page")
        document.body.classList.remove("category__page")
        document.body.classList.remove("posts__page")
      }, []);
    return <Subscribe />
}