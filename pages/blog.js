import React, {useEffect} from 'react';
import Blog from '../components/Blog/Blog';

export default function BlogPage(){
    useEffect(() =>{
        document.body.classList.add("blog__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("category__page")
    }, []);
    return(
        <Blog />
    )
}