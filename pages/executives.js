import React, {useEffect} from 'react'
import Executives from '../components/Executive/Executives'

export default function ExecutivePage() {
    useEffect(() =>{
        document.body.classList.add("executives__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("services__page")
    }, []);
    return(
        <Executives />
    )
}