import React, {useEffect} from 'react'
import CompliancePolicy from '../components/Policies/CompliancePolicy';

export default function CompliancePolicyProcess() {
  useEffect(() =>{
    document.body.classList.add("policy__page")
    document.body.classList.remove("contact__page")
    document.body.classList.remove("services__page")
    document.body.classList.remove("home__page")
    document.body.classList.remove("executives__page")
    document.body.classList.remove("blog__page")
    document.body.classList.remove("category__page")
    document.body.classList.remove("posts__page")
    document.body.classList.remove("subscribe__page")
  },[]);
  return (
    <CompliancePolicy />
  )
}
