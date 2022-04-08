import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

export default function EsgPost() {
    return(
        <React.Fragment>
            {/* Header */}
            <Header />

            {/* Top Banner */}
            <div className='style--banner esg__banner'>
                <div className='banner__wrapper'>
                    <div className='banner__content'>
                        <div className='banner__hgroup hgroup'>
                            <div className='banner__subtitle subtitle'>
                                <h3>
                                    <Link href="/esg">
                                        <a>ESG</a>
                                    </Link>,&nbsp;
                                    <Link href="/freemium">
                                        <a>Freemium</a>
                                    </Link>
                                </h3>
                            </div>
                            <div className='banner__title title'>
                                <h3>ESG In Focus: 9 Questions Investors Should Ask CEOs</h3>
                            </div>
                        </div>                        
                        <div className='banner__text'>
                            <div className='banner__meta'>
                                <div className='meta__author'>
                                    <div className='meta__icon'>
                                        <Image src="/images/IG-User-Logo.jpg" alt='Logo' width="50" height="50" />
                                    </div>
                                    <div className='meta__name'>
                                        <span>Author</span>
                                        <p>InvestorGate</p>
                                    </div>
                                </div>
                                <div className='meta__date'>
                                    <span>Published</span>
                                    <p>April 7, 2022</p>
                                </div>
                                <div className='meta__stats'>
                                    <span>0 comments</span>
                                    <p>Join the Conversation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className='section post__section'>
                <div className='section__wrapper site__width'>
                    <div className='sidebar__grid'>
                        {/* Post Content */}
                        <div className='post__content body__text'>
                            <p className='italic--text'>ESG transformation is increasingly seen by investors as crucial to a company’s long-term competitive advantage and value creation – not to mention the positive effects on the environment and society.</p>

                            <p>The majority of CEOs today acknowledge ESG can be a strategic value driver for their organisations, according to the latest <Link href="#"><a>EY CEO Survey 2022</a></Link>. It suggests companies are taking ESG more seriously and implementing sustainability practices as part of their corporate strategy.</p>

                            <p>For companies, it can create opportunities to improve their ability to attract and retain talent, reduce regulatory and compliance risk, decrease their cost of capital, and forge deeper relationships with customers, suppliers, and other stakeholders.</p>

                            <p>However, it’s not always easy to determine which companies are delivering meaningful change and which are just going through the motions as a box-checking exercise. This issue also referred to as greenwashing whereby companies use ESG as a marketing tool, is a real challenge for investors.</p>

                            <p className='innerSubTitle'>ESG Tailwinds</p>

                            <p>According to Bloomberg Intelligence, global ESG assets could exceed $53 trillion by 2025. The sector has benefited from a convergence of favourable factors including governmental policies, social forces, and strong fund performance – both active and passive. While the trend should be greeted with open arms, the reality is there’s still a long way to go for governments, companies, and financial institutions to reach their stated objectives.</p>

                            <p>For fund managers responsible for allocating capital into ESG assets, it involves much more than just reading a company’s sustainability statement and listening into the ESG discussion on the annual corporate presentation.</p>

                            <p>Not only must investors get to grips with the underlying data and appropriate ESG frameworks, but they also require deeper qualitative insights, both for a frame of reference and to ensure the facts match the narrative. Investors need to improve their knowledge of ESG issues, be comfortable asking the difficult questions and check that organisations are delivering on their promises.</p>

                            <p className='innerSubTitle'>Questions to Ask</p>

                            <p>Here’s a list of the most pertinent questions to ask, compiled from our discussions with investors, companies and ESG experts.</p>

                            <p className='innerTitle'>1. Which ESG issues matter most to your organisation’s stakeholders?</p>

                            <p>This can highlight to what extent the company has talked to its principal stakeholders – customers, suppliers, employees, and community members – about the most pressing ESG topics. How these issues are then incorporated into the company’s strategy, operating model, reporting and disclosures indicate how the company is seeking to improve stakeholder outcomes. Ideally, this stakeholder engagement should be an ongoing process to assess progress and stay abreast of any changes over time.</p>

                            <p className='innerTitle'>2. How are you implementing your ESG standards across your organisation’s entire value chain?</p>

                            <p>Implementing an ESG strategy requires change not only within the organisation, but right across the value chain including suppliers, partners, and customers. For many companies, it is the supply chains where most of their carbon footprint resides. It’s therefore crucial that the company’s ESG standards are applied during the process of supplier selection and that suppliers integrate the new ESG measures into their operations.</p>

                            <p>There are also many ways companies can effect change in their customers’ behaviours, especially product-based companies that are able to offer incentives for trade-ins/part exchanges or recycling of old products and consumables. Companies should be as concerned about their indirect impact on their environment as they are the direct impact.</p>

                            <p className='innerTitle'>3. How are you holding your organisation accountable to ESG targets?</p>

                            <p>CEOs need to select the right KPIs to measure impact, assess the quality of their data management systems, develop processes to monitor progress and align incentives to ESG goals. Companies should focus on progress, not perfection, to keep the organisation moving forwards.</p>

                            <p>By their very nature, most ESG objectives are long-term, such as a ten-year plan to achieve net-zero emissions or a five-year plan to achieve gender equality in the workforce. In the short term, however, companies must expect to be challenged on their progress and be held accountable to interim targets.</p>

                            <p className='innerTitle'>4. How do you balance short-term execution with long-term sustainability goals?</p>

                            <p>A relevant current example is the energy sector, where companies are trying to balance the needs of customers’ power supply today with the imperative for climate action and zero emissions in the future. All the while managing the risk that curbing supplies from non-renewable sources could see energy prices jump even higher and force millions of people to live without gas or heating in their home.</p>

                            <p>Companies across every sector of the economy are navigating similar trade-offs and each organisation has a unique ESG strategy to guide them on their journey. What works for one company, will not work for another, and it’s up to investors to analyse the suitability of each strategy to ensure short and long-term needs are well-balanced.</p>

                            <p className='innerTitle'>5. What impact does your ESG strategy have on your company’s competitiveness?</p>

                            <p>Although it is often assumed that implementing a raft of ESG measures can have a negative impact on an organisation’s competitiveness, the notion appears not to hold in many cases. For example, one study by the University of Pennsylvania found that mining companies with positive social impact scores had an easier time when extracting resources, without extensive planning or operational delays. The study goes on to demonstrate how these companies achieved higher market valuations than competitors with lower social engagement.</p>

                            <p>If a CEO is still of the mindset that ESG measures will only weigh on their company’s performance – rather than act as a potential catalyst for sustainable growth – it could spell danger for investors.</p>

                            <p className='innerTitle'>6. How are you tackling ESG alongside other disruptive trends, such as digitization and automation, in your industry?</p>

                            <p>There are many similarities between ESG and other disruptive trends, such as digital transformation and automation. in a company’s strategy and execution plan. For many organisations, implementing a single transformational agenda can be a challenge let alone multiple agendas at the same time.</p>

                            <p>A recent PWC report argues companies that ignore ESG in favour of other transformations like digital are making a mistake. “With digital transformation still a work in progress for most companies, the notion of tackling another big transition may seem daunting. We’d suggest, though, that deferring the ESG transformation creates the risk that as you rewire your company, you will hard-wire in old value creation models that can’t meet the concerns of your stakeholders and the long-term needs of your business.”</p>

                            <p className='innerTitle'>7. How does ESG change your due diligence process?</p>

                            <p>For the current crop of capital allocators and business leaders, conventional valuation and risk factors alone are not enough when assessing new investment prospects. Fortune 500 Board Member and Economist, Dambisa Moyo, says “due diligence efforts today require an audit of how an acquirer or acquiree meets certain ESG standards. ESG audits also matter when raising capital; debt-rating agencies and investors require this additional data, too.”</p>

                            <p>Compared to their higher-rated competitors, companies with low ESG ratings find it harder to raise capital and their cost of capital also tends to be higher. And, as all investors know, the cost of capital is a critical factor in determining future growth whether that’s through organic or acquisitive means.</p>

                            <p className='innerTitle'>8. How do you develop and implement a global approach to ESG?</p>

                            <p>ESG and sustainability are not only hard to define, but they take on different meanings and have different focuses across different parts of the world. For example, GreenBiz highlights the fact that “in North America, consumers associate sustainability most with recycling; therefore, investment into the circular economy will be vital to align strategies with local sentiment and ensure an organisation’s actions resonate well with the domestic audience.” This approach alone would unlikely satisfy stakeholders in Europe for instance.</p>

                            <p>Hence companies need to demonstrate flexibility in their approach according to regional nuances in ESG perspective, implementing tailored practices and policies suitable for each market they serve, whilst ensuring consistency with their overarching corporate strategy.</p>

                            <p className='innerTitle'>9. How does your company navigate the ever-changing ESG landscape, particularly in respect of societal pressures and regulatory changes?</p>

                            <p>How companies react to movements such as Black Lives Matter or Climate Action says a lot about the leadership and direction of the organisation. Companies prepared to take a strong, considered and consistent position on these topics tend to be viewed more favourably by community groups, which in turn can lead to more favourable outcomes for their shareholders in the long run.</p>

                            <p className='innerSubTitle'>Sources:</p>
                            <ul>
                                <li>
                                    <Link href="https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/five-ways-that-esg-creates-value">
                                        <a target="_blank">
                                        https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/five-ways-that-esg-creates-value
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.ey.com/en_us/strategy/three-ways-to-directly-tie-esg-strategy-to-corporate-strategy">
                                        <a target="_blank">
                                        https://www.ey.com/en_us/strategy/three-ways-to-directly-tie-esg-strategy-to-corporate-strategy
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://hbr.org/2022/01/10-esg-questions-companies-need-to-answer">
                                        <a target="_blank">
                                        https://hbr.org/2022/01/10-esg-questions-companies-need-to-answer
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www2.deloitte.com/ch/en/pages/risk/articles/visionary-heroes.html">
                                        <a target="_blank">
                                        https://www2.deloitte.com/ch/en/pages/risk/articles/visionary-heroes.html
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://repository.upenn.edu/cgi/viewcontent.cgi?article=1135&context=mgmt_papers">
                                        <a target="_blank">
                                        https://repository.upenn.edu/cgi/viewcontent.cgi?article=1135&context=mgmt_papers
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.pwc.com/gx/en/issues/reinventing-the-future/take-on-tomorrow/esg-transformation.html">
                                        <a target="_blank">
                                        https://www.pwc.com/gx/en/issues/reinventing-the-future/take-on-tomorrow/esg-transformation.html
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </React.Fragment>
    )
}