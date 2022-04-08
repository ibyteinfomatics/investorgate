import React from 'react'
// import Sidebar from '../Sidebar/SIdebar'
import Sidebar from '../Sidebar/Sidebar'
import FeedItems from '../Feeds/FeedItems'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Footer from '../Footer/Footer'

export default function Freemium() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />

        {/* Category Content */}
        <div className='section'>
            <div className='section__wrapper site__width'>
                <SectionHgroup
                    sectionCateTitle="Freemium"
                    sectionCateSubtitle="Category"
                />
                <div className='sidebar__grid'>
                    <Sidebar />
                    <div className='feed--lists'>
                    <FeedItems 
                            blogImg="/images/ESG-feed.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="April 7, 2022"
                            cate1Link="/esg/"
                            cate1="ESG"
                            cate2Link="/freemium/"
                            cate2="Freemium"
                            headlineLink="https://investorgate.co/esg-in-focus-9-questions-investors-should-ask-ceos-about-esg/"
                            headline="ESG In Focus: 9 Questions Investors Should Ask CEOs about ESG"
                            feedText="ESG transformation is increasingly seen by investors as..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-1-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="/analysis/"
                            cate1="Analysis"
                            cate2Link="/freemium/"
                            cate2="Freemium"
                            headlineLink="https://investorgate.co/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/"
                            headline="Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers"
                            feedText="Mark Leonard, the CEO of Constellation Software, famously..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-2-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="/company-coverage/"
                            cate1="Company Coverage"
                            cate2Link="/freemium/"
                            cate2="Freemium"
                            headlineLink="https://investorgate.co/company-coverage-what-type-of-companies-make-the-cut/"
                            headline="Company Coverage: What type of companies make the cut?"
                            feedText="Our company coverage focuses squarely on high-quality companies..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-3-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="/expert-networks/"
                            cate1="Expert networks"
                            cate2Link="/freemium/"
                            cate2="Freemium"
                            headlineLink="https://investorgate.co/couche-tard-the-impact-of-electric-vehicles/"
                            headline="Expert Networks: What’s next for the industry?"
                            feedText="I’ve always worked for media agencies, across my..."
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </React.Fragment>
  )
}
