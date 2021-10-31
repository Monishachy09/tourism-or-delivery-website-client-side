import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Cart.css'

const Cart = () => {
    const {selectedCourse} = useAuth();
    return (
        <div className="cart ">
            <Container>
                <div className="row">
                    <div className="col-md-8">
                        {
                            selectedCourse.map((courses) => (
                                <div key={courses.id}className="row">
                                    <div className="col-sm-5">
                                        <img className="img-fluid" src={courses.img} alt="" />
                                    </div>
                                    <div className="col-sm-5">
                                        <h5>{courses.name}</h5>
                                        <p className="mb-0">{courses.short}</p>
                                        <h4>dsf{courses.price}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;