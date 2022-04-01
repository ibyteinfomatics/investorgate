import React from 'react'
import FeedItems from '../Feeds/FeedItems'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Sitebanner from '../Sitebanner/Sitebanner'

export default function Blog() {
    return(
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* Top Banner */}
            <div className='style--banner blog--banner'>
                <Sitebanner 
                    bannerTitle="InvestorGate news, articles and excerpts from our exclusive interviews"
                    bannerText1="Never miss a beat! Subscribe to our weekly newsletter for the latest news, interviews and analysis. If you like what you see, feel free to share with others."
                    bannerButton="Read More"
                />
            </div>

            {/* Latest News */}            
            <div className='feed--section section'>
                <div className='section__wrapper site__width'>
                    <SectionHgroup 
                        sectionSubtitle="LATEST NEWS & ARTICLES"
                        sectionTitle="InvestorGate Articles"
                    />

                    <div className='feed--lists' data-aos="fade-up" data-aos-duration="2000">
                        <FeedItems 
                            blogImg="/images/FI-1-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="https://coacherly.com/category/analysis/"
                            cate1="Analysis"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/"
                            headline="Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers"
                            feedText="Mark Leonard, the CEO of Constellation Software, famously..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-2-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="https://coacherly.com/category/company-coverage/"
                            cate1="Company Coverage"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/company-coverage-what-type-of-companies-make-the-cut/"
                            headline="Company Coverage: What type of companies make the cut?"
                            feedText="Our company coverage focuses squarely on high-quality companies..."
                        />

                        <FeedItems 
                            blogImg="/images/FI-3-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="https://coacherly.com/category/expert-networks/"
                            cate1="Expert networks"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/couche-tard-the-impact-of-electric-vehicles/"
                            headline="Expert Networks: What’s next for the industry?"
                            feedText="I’ve always worked for media agencies, across my..."
                        />
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}