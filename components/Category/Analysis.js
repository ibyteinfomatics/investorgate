import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/SIdebar'
import FeedItems from '../Feeds/FeedItems'
import SectionHgroup from '../SectionHgroup/SectionHgroup'

export default function Analysis() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />

        {/* Category Content */}
        <div className='section'>
            <div className='section__wrapper site__width'>
                <SectionHgroup
                    sectionCateTitle="Analysis"
                    sectionCateSubtitle="Category"
                />
                <div className='sidebar__grid'>
                    <Sidebar />
                    <div className='feed--list'>
                        <FeedItems 
                            blogImg="/images/FI-1-1.jpg"
                            feedLogo="/images/IG-User-Logo.jpg"
                            authorName="Investorgate"
                            feedDate="February 26, 2022"
                            cate1Link="/category/analysis/"
                            cate1="Analysis"
                            cate2Link="https://coacherly.com/category/freemium/"
                            cate2="Freemium"
                            headlineLink="https://coacherly.com/analysis-constellation-vitec-and-vmss-impeccable-match-for-serial-acquirers/"
                            headline="Analysis: Constellation, Vitec, and VMS’s Impeccable Match for Serial Acquirers"
                            feedText="Mark Leonard, the CEO of Constellation Software, famously..."
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
