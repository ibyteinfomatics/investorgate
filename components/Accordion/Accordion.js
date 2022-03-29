import React, {useState} from 'react'
import AccordionList from './Accordionlist';
import AccordionData from './api'

const Accordion = () => {
    const [data, setData] = useState(AccordionData);
    return (
        <React.Fragment>
            {/* <div className="section--wrapper wrapper faqs--wrapper"> */}
                <div className="accordian--list">
                    <AccordionList />
                </div>
            {/* </div> */}
        </React.Fragment>
    )
}

export default Accordion;