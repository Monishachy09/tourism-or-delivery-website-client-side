import React from 'react';
import Slide from 'react-reveal/Slide';

const Destination = () => {
    return (
        <section>
            <div className="text-center mb-5 mt-5">
        <Slide left>
      <h4 style={{color:'#E8614D'}}>Destination list</h4>
    </Slide>
        <Slide right>
      <h2>Go Erotic Places</h2>
    </Slide>
        </div>
        <div className="container mb-5">
            <div className="row">
            <Slide left>
                <div className="col-3 img-fluid">
                <img src="https://i.ibb.co/G5n5jdC/spain.png" alt="" />
                </div>
                <div className="col-6 img-fluid ">
                <img src="https://i.ibb.co/jgQr8zR/thailand.png" alt="" />
                </div>
                <div className="col-3 img-fluid ">
                <img src="https://i.ibb.co/m51MrgG/africa.png" alt="" />
                </div>
        </Slide> 
            </div>
            <Slide right>
            <div className="row">
                <div className="col-6">
                <img src="https://i.ibb.co/T2c3Gzm/maldives.png" alt="" />
                </div>
                <div className="col-6">
                <img src="https://i.ibb.co/kgvCpWc/swizerland.png" alt="" />
                </div>
            </div>
            </Slide>
        </div>
        </section>
    );
};

export default Destination;