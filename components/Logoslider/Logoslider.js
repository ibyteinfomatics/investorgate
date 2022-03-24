import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
export default function Logoslider () {
    return(
        <React.Fragment>
            <div className='logo--slider'>
                <Carousel swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]} >
                    <div>
                        <Image width="150" height="62" src="/images/seek-logo.png" alt="image1" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/fujtsu-logo.png" alt="image2" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/marsh-logo.png" alt="image3" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/smatrics-logo.png" alt="image4" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/datum360-logo.png" alt="image5" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/datum360-logo.png" alt="image5" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/fujtsu-logo.png" alt="image4" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/marsh-logo.png" alt="image3" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/evelved-logo.png" alt="image2" />    
                    </div>
                    <div>
                        <Image width="150" height="62" src="/images/seek-logo.png" alt="image1"/>    
                    </div>
                </Carousel>
            </div>
        </React.Fragment>
    )
}