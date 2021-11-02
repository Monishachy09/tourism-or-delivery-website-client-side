import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const product = [
        {
            "id":1,
            "img": "https://i.ibb.co/YQbhMBf/Background-1.png",
            "title":"Travel smooth",
            "subTitle": "With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother."
        },
        {
            "id":2,
            "img": "https://i.ibb.co/dtwz6RP/Background-3.png",
            "title":"Travel Concur",
            "subTitle": "Simplify travel management and let employees book business travel on their own, at the best rates, and within spending policies."
        },
        {
            "id":3,
            "img": "https://i.ibb.co/gtHtx1b/Background-4.png",
            "title":"Travel smooth",
            "subTitle": "With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother."
        },
    ]
    const [index, setIndex] = useState(0);
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(product);
        

    }, [])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    
    return (
        <div style={{backgroundColor:'#253B46',padding:'80px 0px 40px 0px', }}>
            <div className="container">

                <Carousel fade activeIndex={index} onSelect={handleSelect} interval={4000}>
                    {
                        item.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="row align-items-center carousel-sec">

                                    <div className="col-md-6 col-sm-12"style={{paddingRight:'90px'}} >
                                       <Slide right>
                                       <h1 className="new" style={{color:'#E8614D'}}>{item.title}</h1>
                                       </Slide>
                                       <Slide left>
                                       <p style={{color:'#FFFFFF'}}>{item.subTitle}</p>
                                        <div className="d-flex align-items-center">
                                       
                                       <button type="button" className="btn btn-danger Book_now me-5">Book Now</button>
                                        </div>
                                       </Slide>

                                        
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            className=" img-fluid"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }

                </Carousel>

            </div>
        </div>
    );
};

export default Banner;




















