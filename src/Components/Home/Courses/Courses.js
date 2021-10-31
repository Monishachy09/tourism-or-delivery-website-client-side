import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import './Course.css';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FakeData from '../../../AllData/fakeData.json'
import useAuth from '../../hooks/useAuth';

const Courses = () => {
    const [courses, setCourses] = useState([]);

        useEffect (() => 
        {
            setCourses(FakeData);
    },[])


    return (
        <div id="courses" className="serv">
            <div className="text-center">
            <Slide left>
          <h4 style={{color:'#E8614D'}}>Featured Tour</h4>
        </Slide>
            <Slide right>
          <h3>Most Popular Tours</h3>
        </Slide>
            </div>

            {
                        courses.map((course, index) => {
                            return (
                                     <div key={index} className="col-lg-4 col-md-6 justify-content-center mt-5 mb-5">
                                 <Card style={{ width: '20rem' }}>
                                    
                                 <div className="text-center">
                                        <Zoom>
                                            <Card.Img variant="top" src={course.img} style={{width:'100%',height:'250px'}}/>
                                        </Zoom>
                                        </div>
                                   
                                     <Card.Body className="text-center">
                                         <span><i class="rate fas fa-star"></i> {course.rate} superb</span>
                                         <h5>{course.name}</h5>
                                         <p><span className="price">${course.price}</span> / per person</p>
                                        <Link to={`/singleCourse/${course.id}`}className="nav-link text-secondary"> <button className="btn btn-info">Details</button> </Link> 
                                     </Card.Body>
                                     <Card.Footer style={{ backgroundColor:"#FAF5EE", borderRadius:"10px" }} className="foot text-center m-3">3days 12+ Los Angels</Card.Footer>
                                 </Card>
                                 </div>
                                 
                            )
                        })
                    }

        </div>
    );
};

export default Courses;