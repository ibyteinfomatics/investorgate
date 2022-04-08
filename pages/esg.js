import React, {useEffect} from 'react'
import Esg from '../components/Category/Esg';

export default function EsgPage() {
  useEffect(() => {
    document.body.classList.add("category__page")
    document.body.classList.remove("contact__page")
    document.body.classList.remove("policy__page")
    document.body.classList.remove("services__page")
    document.body.classList.remove("home__page")
    document.body.classList.remove("executives__page")
    document.body.classList.remove("blog__page")
    document.body.classList.remove("posts__page")
    document.body.classList.remove("subscribe__page")
  },[]);
  return(
    <Esg />
  )
}