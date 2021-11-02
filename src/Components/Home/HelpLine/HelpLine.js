import React from 'react';
import HelpData from '../../../AllData/HelpData.json';
import Slide from 'react-reveal/Slide';
import './HelpLine.css';

const HelpLine = () => {
    return (
        <div>
            <section>
                <div id="helpline" className="container pb-5">
                    <div className="text-center info pt-5 mb-4 mt-4">
                        <Slide bottom>
                            <h2 style={{ color: '#E8614D' }}>What can you do for you?</h2>
                        </Slide>
                    </div>
                    <div className="row">

                        {
                            HelpData.map((help, index) => {
                                return (
                                    <div key={index} className="col-md-3 mt-5  ">
                                        <div className="text-center shadow p-3 " style={{height:'200px',borderRadius:'10px'}}>
                                            <img src={help.Img} alt="" className="img-fluid" />
                                            <h6 className="mt-2">{help.tittle}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="text-center mt-5">
                        <p>We’re a different kind of corporate travel management solution – one that listens to client needs, values innovation in development and solves client problems with brilliant simplicity</p>
                        <button className="btn btn-sm btn-danger">Learn more about us</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpLine;