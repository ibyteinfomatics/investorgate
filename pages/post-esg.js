import React, {useEffect} from 'react'
import EsgPost from '../components/Posts/EsgPosts';

export default function PostEsgPage(){
    useEffect(() => {
        document.body.classList.add("posts__page")
        document.body.classList.remove("category__page")
        document.body.classList.remove("contact__page")
        document.body.classList.remove("policy__page")
        document.body.classList.remove("services__page")
        document.body.classList.remove("home__page")
        document.body.classList.remove("executives__page")
        document.body.classList.remove("blog__page")
        document.body.classList.remove("subscribe__page")
    });
    return(
        <React.Fragment>
            <EsgPost />
        </React.Fragment>
    )
}