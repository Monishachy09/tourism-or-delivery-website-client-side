import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useAuth from '../hooks/useAuth';




const SingleCourse = () => {
    const {id} = useParams();
    const [singleId, setSingleId] = useState({});
    const {courses, AddToCart} = useAuth();



    useEffect(() => {
        
        const url = (`https://sheltered-tundra-30203.herokuapp.com/courseSingle/${id}`);
       
       
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                setSingleId(data)
            console.log(data)
            })
          
    }, [id])






    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-5">
                        <img src={singleId?.img} alt="" className="img-fluid w-100" />
                         </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                    <h3>{singleId.name}</h3>
                        <h2>{singleId.title}</h2>
                        <p>{singleId?.short}</p>
                        <p>{singleId?.disc}</p>
                        <span>${singleId?.price}</span>
                        <div className="mt-3 pb-3">
                            <button onClick={() => AddToCart(courses)} className="btn btn-info">added to cart</button>
                         </div> 
                    </div>
            </div>
            </div>
            </section>

    );
};


export default SingleCourse;