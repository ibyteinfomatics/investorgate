import React, {useEffect} from 'react';
import Home from '../components/Home/Home';

export default function HomePage(){
    useEffect(() =>{
        document.body.classList.add("home__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("contact__page")
    }, []);
    return(
        <Home />
    )
}