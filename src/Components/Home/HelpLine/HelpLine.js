import React from 'react';
import HelpData from '../../../AllData/HelpData.json'
import './HelpLine.css';

const HelpLine = () => {
    return (
        <div>
              <section>
            <div id="helpline" className="container pb-5">
                <div className="text-center info pt-5">
                    <h3>What can we help you with?</h3>
                </div>
                <div className="row">
                    
                        {
                            HelpData.map((help, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-4 d-flex justify-content-center check-bg mt-5 g-4 mb-5">
                                   
                                       <div className="text-center ">
                                       <img src={help.Img} style={{height:'120px', width:'120px'}}/>
                                       <p>{help.tittle}</p>
                                       </div> 
                                          
                                    
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="text-center">
                        <p>We’re a different kind of corporate travel management solution – one that listens to client needs, values innovation in development and solves client problems with brilliant simplicity</p>
                        <button className="btn btn-sm btn-danger">Learn more about us</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpLine;