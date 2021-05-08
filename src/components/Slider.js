import s1 from '../slider/s4.jpg';
import s2 from '../slider/s2.jpg';
import s3 from '../slider/s3.jpg';
// import s4 from '../slider/s4.jpg';

import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Slider() {
    
    return(
        <>
           
           <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: `25rem`}}
                    src={s1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      style={{height: `25rem`}}
                      className="d-block w-100"
                      src={s2}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: `25rem`}}
                        className="d-block w-100"
                        src={s3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
                
        </>
    )
}

export default Slider;