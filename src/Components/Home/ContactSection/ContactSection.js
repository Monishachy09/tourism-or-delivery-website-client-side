import React from 'react';
import Slide from 'react-reveal/Slide';
import './ContactSection.css'


const ContactSection = () => {
    return (
        <Slide bottom>
            <section style={{marginTop:'20px'}}>
        <div  className="contact my-5 mt-5 pt-5 py-5">
            <div  className="container">
               
               <div className="section-header text-center text-white mb-5">
                    <h5 className="">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
               </div>
            </div>
        </section>
    
        </Slide>
    );
};

export default ContactSection;