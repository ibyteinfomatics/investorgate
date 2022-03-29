import React, {useState} from 'react'
import AccordionData from './api'

const AccordionList = ({idx, id, title, content}) => {

    const [show, setShow] = useState(true);
    const [active_id, setId] = useState(0);
    const accord = 'accord_$[id]';
    const [data, setData] = useState(AccordionData);

    const handleChange=(idd)=>{
        (active_id==idd ? setId(0) : setId(idd));
    }

    return (
        <React.Fragment>
            <ul>
                {
                    data.map((curElem,index) => {
                        return <li key={curElem.id} id={curElem.id} className={show && curElem.id == active_id ? "const active--list" : "const"} data-activeid={active_id}>
                            <div className="accor-head">                            
                                <p onClick={() => handleChange(curElem.id)} className={show && curElem.id == active_id ? "active" : ""}>
                                {/* <span className="faq-count">{curElem.id}</span> */}
                                {curElem.title}</p>
                            </div>
                            <div className="accor-data">
                                <p dangerouslySetInnerHTML={{__html: curElem.listingData && curElem.content ? `<span>${curElem.content}</span>` : curElem.content}}></p>
                                <ol key={1}>
                                    {curElem.listingData && curElem.listingData.map((listing) => <li key={1}>{listing}</li>)}
                                </ol>
                                <p dangerouslySetInnerHTML={{__html: curElem.listingSubData && curElem.subcontent ? `<span>${curElem.subcontent}</span>` : curElem.subcontent}}></p>
                                <ol key={2}>
                                    {curElem.listingSubData && curElem.listingSubData.map((sublisting) => <li key={2}>{sublisting}</li>)}
                                </ol>
                                <p dangerouslySetInnerHTML={{__html: curElem.listingSubData && curElem.subcontent2 ? `<span>${curElem.subcontent2}</span>` : curElem.subcontent2}}></p>
                                {curElem.subcontent3 && 
                                <p>{curElem.subcontent3} <a href={curElem.subcontenturl}>{curElem.subcontentlink}</a></p>
                                }
                            </div>
                        </li>
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default AccordionList;