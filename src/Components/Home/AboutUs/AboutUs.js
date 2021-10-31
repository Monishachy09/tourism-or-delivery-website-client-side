import React from 'react';
import { Container } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about">
           
               <div className="text-center pb-5 mb-5"> 
                   <Zoom>
                    <h2 className="text-white">KNOW MORE ABOUT OUR TRAVEL AGENCY</h2>
                </Zoom>
                </div>
            <container> 
    
                <div className="row">
                    <div className="col pe-3 title">
                     <Bounce bottom>
                     <h5 className="text-white">ABOUT US</h5>
                     <p className="text-muted mb-0">We are trusted by our clients and have a reputation for the best services in the field. simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                     </Bounce>
                     <div className="w-50%">
                   <input type="text" />
                    <input type="button" value="submit" />
                   </div>
                    </div>
                  
                    <div className="row col">
                    <div className="col-6 pe-3">
                     <Bounce bottom>
                     <h5 className="text-white">ABOUT US</h5>
                     <p className="text-muted">We are trusted by our clients and have a reputation for the best services in the field. simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                     </Bounce>
                    </div>
                    <div className="col-6 pe-3">
                     <Bounce bottom>
                     <h5 className="text-white">ABOUT US</h5>
                     <p className="text-muted m-">We are trusted by our clients and have a reputation for the best services in the field. simply free text dolor sit amett consectetur adipiscing elit. It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                     </Bounce>
                    </div>
                    </div>
                </div>
</container>
          
        </div>
    );
};

export default AboutUs;
