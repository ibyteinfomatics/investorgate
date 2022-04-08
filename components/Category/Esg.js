import React from 'react'
// import Sidebar from '../Sidebar/SIdebar'
import Sidebar from '../Sidebar/Sidebar'
import FeedItems from '../Feeds/FeedItems'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Footer from '../Footer/Footer' 

export default function Esg() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />

        {/* Category Content */}
        <div className='section'>
            <div className='section__wrapper site__width'>
                <SectionHgroup
                    sectionCateTitle="ESG"
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
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </React.Fragment>
  )
}
