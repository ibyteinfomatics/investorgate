import React from 'react'
import AccordianList from './AccordianList'

export default function Accordian() {
    return(
        <React.Fragment>
            <ul className='accordian--list'>
                <AccordianList 
                    accordTitle="What is InvestorGate?"
                    accordData="InvestorGate is a qualitative research platform for buy-side investors. InvestorGate Services facilitates one-on-one phone conversations between leading investors and experts like you."
                />
                <AccordianList 
                    accordTitle="Who are InvestorGate clients?"
                    accordData="InvestorGate works with public market investors including hedge funds, mutual funds, family offices, long only funds, etc."
                />
                <AccordianList 
                    accordTitle="Why should I become a InvestorGate expert?"
                    accordData="InvestorGate compensates experts for their time and offers the opportunity for experts to secure further work through short or long term engagements. Through InvestorGate, experts can share their knowledge and experience while engaging with investor perspectives."
                />
                <AccordianList 
                    accordTitle="What is the time commitment?"
                    accordData="Calls typically last 45-60 minutes."
                />
                <AccordianList 
                    accordTitle="How do I become a InvestorGate expert?"
                    accordData="At InvestorGate, we custom source experts for our customers’ projects to ensure we are getting them the most relevant expertise. If you would like to be considered for future projects, please contact us to provide details about your expertise and experience."
                />
                <AccordianList 
                    accordTitle="Are calls recorded? What happens to the recording of the call?"
                    accordData="Yes. Each InvestorGate call is recorded, transcribed, and shared on the InvestorGate Platform two weeks later. The audio recording is not posted, but may be used for internal training purposes or to correct transcription errors. Transcripts undergo our rigorous compliance screens prior to upload to safeguard against sharing of material non-public information."
                />
                <AccordianList 
                    accordTitle="Why are calls recorded and transcribed?"
                    accordData="The InvestorGate Platform compounds the value of expert information through a shared knowledge base. Each call is transcribed and shared to the platform, enabling our customers to learn from each other and get up to speed faster. Our transcription process enables stronger compliance procedures than a standard expert call because, in addition to our robust compliance training for customers and experts, each transcript is scrubbed for personal identifying information and verified for compliance."
                />
                <AccordianList 
                    accordTitle="Who can view a transcript?"
                    accordData="Transcripts are uploaded to our platform for Platform customers to access. The platform is not a public forum and transcripts are not to be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of InvestorGate."
                />
                <AccordianList 
                    accordTitle="Will I be identified to the customer or in the transcript?"
                    accordData="Clients are provided your employment history and bio as part of the screening process, and this information will be shown in transcripts posted to the InvestorGate Platform. Personal identifying information (e.g. name, age) is not shared. Similarly, customers are not identified to experts and remain anonymous."
                />
                <AccordianList 
                    accordTitle="Will I know who the interviewee is?"
                    accordData="No. Investor information is not shared with experts before, during, or after the call."
                />
                <AccordianList 
                    accordTitle="Do I need to prepare for the call?"
                    accordData="In some cases, customers request brief answers to screening questions to ensure experts have relevant expertise prior to the call. If additional information is requested in preparation for the call, this will be communicated to the expert by the customer operations team."
                />
                <AccordianList 
                    accordTitle="What topics will be discussed during the interview?"
                    accordData="Interview topics range broadly, but general guidelines will be shared prior to the call. Experts are expected to share only public information, as is outlined in detail in our extensive compliance procedures. Typically, investors use expert calls to get up to speed on a company or industry, or gain insight into specific questions."
                />
                <AccordianList 
                    accordTitle="Is there anything I should not discuss on the call?"
                    accordData="Yes. Experts are trained prior to the call to ensure they understand what constitutes material non-public information. Experts should only discuss their view points, opinions, and public information with customers. InvestorGate compliance is always available to clarify any questions on this topic."
                />
                <AccordianList 
                    accordTitle="What is the payment process?"
                    accordData="Our payment options include ACH (US-only), wire, physical check, or PayPal. After you complete a call, you will be prompted to provide us payment preference and details. All payments will be issued within 15 business days. Delivery time will vary slightly by method with physical checks taking the longest."
                />
                <AccordianList 
                    accordTitle="Compliance Details"
                    accordLists="yes"
                    accordsubTitle="InvestorGate has robust compliance processes to ensure that experts are confident in what they can and cannot share."
                    accordlistData="Experts undergo extensive compliance training so they know what they can and cannot share Training covers what constitutes material non-public information and what can and cannot be discussed"
                    accordlistData1="Experts pass a comprehension test before a call is scheduled InvestorGate provides a compliance reminder before each call"
                    accordlistData2="The InvestorGate team reviews each transcript before posting and removes all personal identifying information so experts remain anonymous"
                    accordsubTitle1="InvestorGate ensures experts feel comfortable and empowered to do the right thing"
                    accordlistData3="We empower experts to decline to answer any question."
                    accordlistData4="We support experts in ending a call at any time if necessary, and ensure they are fairly compensated"
                    accordsubTitle2="InvestorGate Compliance Policy"
                    accordData5="See our"
                    accordDataLinksrc="https://coacherly.com/compliance-policy-and-process/"
                    accordDataLink="Compliance policy"
                />
            </ul>
        </React.Fragment>
    )
}