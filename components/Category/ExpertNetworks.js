import React from 'react'
// import Sidebar from '../Sidebar/SIdebar'
import Sidebar from '../Sidebar/Sidebar'
import FeedItems from '../Feeds/FeedItems'
import Header from '../Header/Header'
import SectionHgroup from '../SectionHgroup/SectionHgroup'
import Footer from '../Footer/Footer'

export default function ExpertNetworks() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />

        {/* Category Content */}
        <div className='section'>
            <div className='section__wrapper site__width'>
                <SectionHgroup
                    sectionCateTitle="Expert Networks"
                    sectionCateSubtitle="Category"
                />
                <div className='sidebar__grid'>
                    <Sidebar />
                    <div className='feed--lists'>
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
