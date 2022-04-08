import React, {useEffect} from 'react';
import Home from '../components/Home/Home';

export default function HomePage(){
    useEffect(() =>{
        document.body.classList.add("home__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("blog__page")
        document.body.classList.remove("category__page")
        document.body.classList.remove("posts__page")
        document.body.classList.remove("subscribe__page")
    }, []);
    return(
        <Home />
    )
}