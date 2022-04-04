import React, {useEffect} from 'react'
import Analysis from '../components/Category/Analysis';

export default function AnalsisPage() {
  useEffect(() => {
    document.body.classList.add("category__page")
    document.body.classList.remove("contact__page")
    document.body.classList.remove("policy__page")
    document.body.classList.remove("services__page")
    document.body.classList.remove("home__page")
    document.body.classList.remove("executives__page")
    document.body.classList.remove("blog__page")
  },[]);
  return(
    <Analysis />
  )
}