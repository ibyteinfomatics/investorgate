import React, {useEffect} from 'react'
import TermsConditions from '../components/Policies/TermsConditions'

export default function Terms() {
  useEffect(() =>{
    document.body.classList.add("policy__page")
    document.body.classList.remove("contact__page")
    document.body.classList.remove("services__page")
    document.body.classList.remove("home__page")
    document.body.classList.remove("executives__page")
    document.body.classList.remove("blog__page")
    document.body.classList.remove("category__page")
  },[]);
  return (
    <TermsConditions />
  )
}
