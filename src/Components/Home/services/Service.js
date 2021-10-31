import React from 'react';
import Slide from 'react-reveal/Slide';
import useAuth from '../../hooks/useAuth';

const Service = () => {
    const { courses } = useAuth();


    return (
        <div>
            <div className="text-center">
            <Slide left>
          <h4 style={{color:'#E8614D'}}>Featured Tour</h4>
        </Slide>
            <Slide right>
          <h3>Most Popular Tours</h3>
        </Slide>
            </div>
        </div>
    );
};

export default Service;