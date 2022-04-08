import React from 'react'
// import Sidebar from '../Sidebar/SIdebar'
import Sidebar from '../Sidebar/Sidebar'
import FeedItems from '../Feeds/FeedItems'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Footer from '../Footer/Footer'

export default function CompanyCoverage() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />

        {/* Category Content */}
        <div className='section'>
            <div className='section__wrapper site__width'>
                <SectionHgroup
                    sectionCateTitle="Company Coverage"
                    sectionCateSubtitle="Category"
                />
                <div className='sidebar__grid'>
                    <Sidebar />
                    <div className='feed--lists'>
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
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </React.Fragment>
  )
}
