import React, {useEffect} from 'react'
import ExecutiveTerms from '../components/Policies/ExecutiveTerms'

export default function ExecutiveTermsEngagement() {
  useEffect(() =>{
    document.body.classList.add("policy__page")
    document.body.classList.remove("contact__page")
    document.body.classList.remove("services__page")
    document.body.classList.remove("home__page")
    document.body.classList.remove("executives__page")
    document.body.classList.remove("blog__page")
  },[]);
  return (
    <ExecutiveTerms />
  )
}
