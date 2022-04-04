import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'

export default function CompliancePolicy() {
  return (
    <React.Fragment>
            <Header />
            <div className='section'>
                <div className='section__wrapper site__width'>
                    <SectionHgroup
                        policyTermsTitle="InvestorGate Compliance Policy"
                    />
                    <div className='text__body'>
                        <p>
                            This policy safeguards insider information, namely material non-public information (MNPI), from being used unlawfully.
                        </p>
                        <p>
                            Insider information or MNPI refers to financial results, financial forecasts, product development and R&D information, and strategic information that can cause a positive or negative impact on the security price of an asset if the aforementioned information is made public.
                        </p>
                        <p>
                            The compliance policy prohibits InvestorGate from using material non-public information (MNPI) unlawfully and prevent contributors of content from disclosing MNPI to InvestorGate while developing or creating the content.
                        </p>
                        <p>
                            All InvestorGate authorised representatives that have access to MNPI, or potential MNPI would have undergone timely training to understand the legal nature of MNPI and this policy. This policy will also be subject to review periodically.
                        </p>
                        <p>
                            All MNPI that has been made available by the services rendered by InvestorGate will be subject to strict adherence to all applicable laws and regulations. The MNPI will be bound by confidentiality for an entire trading day following any public announcement under lawful disclosure by the authorised entity or the owner of the MNPI.
                        </p>
                        <p>
                            All Contributors of this policy will be reminded and urged by InvestorGate to ensure that their content does not include any MNPI. InvestorGate will not seek to gain access to MNPI from contributors and will only receive MNPI following a written agreement that will ensure the protection of the MNPI from being disclosed.
                        </p>
                        <p>
                            Any MNPI content or potential MNPI content that InvestorGate receives will be logged and recorded. This record will be maintained and can be accessed by law enforcement or regulators upon receiving a legitimate legal request. The record-keeping of the MNPI will include:
                        </p>
                        <ol className='terms'>
                            <li>The date received and the source of the MNPI;</li>
                            <li>The circumstances that led to the disclosure of the MNPI by the contributor; and</li>
                            <li>The nature of the MNPI and all the InvestorGate authorised representatives that have access to it.</li>
                        </ol>
                        <p>The content received by a contributor will undergo a quality check and review by an authorised representative of InvestorGate who understands and will strictly adhere to this policy. InvestorGate will hold the right to change or edit the content received from the contributor to remove any potential MNPI.</p>
                        <p>InvestorGate will not distribute contributor content to third parties but only use the content as an independent publisher.</p>
                        <p className='innerTitle'>Confidentiality & Compliance Process</p>
                        <p>A confidential agreement is a non-disclosure agreement that states that the signer cannot disclose or in any way profit from company confidential information supplied by their employer, customer, suppliers, and any other party that may benefit from shared confidential information.</p>
                        <p>All confidential information will be held in confidence and not made available to any third party that is or is not associated with InvestorGate. MNPI is a type of confidential information that is bound by this agreement. However, any confidential information that becomes publicly known by ways other than the breach of the confidentiality agreement and/or a breach of this policy will be excluded from the confidentiality agreement.</p>
                        <p className='innerTitle'>Compliance Process</p>
                        <p>InvestorGate is an independent publisher without any ties to other corporations and institutions. The founders, advisors, and management team at InvestorGate have significant experience efficiently dealing with confidential information on an ongoing basis in their past and present roles. They collectively bring experience working with the expert, fund managers Investment firms, institutional investors, retail investors, and educational institutions.</p>

                        <p>Each executive, past or present, when interviewed by InvestorGate, will have signed Terms of Conditions that ensure that no MNPI is disclosed or offer any advice that may be deemed unlawful.</p>

                        <p>During the interview process, InvestorGate will ensure that the conversation will in no way evoke the disclosure of any confidential information. The interview is recorded, transcribed, and edited where necessary to remove any possible MNPI and only then published on the InvestorGate platform for its clients to view, read, or listen.</p>

                        <p>Any further questions regarding the policy can be sent to: info@investorgate.co</p>

                        <p>InvestorGate produces expert insight and curated content for investment firms, corporations, education institutions, and retail investors. We publish interviews with industry executives to enable our clients to better understand the strategies, operating models, economic and cultural characteristics of high-quality companies.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
  )
}
