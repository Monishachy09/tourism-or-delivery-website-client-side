import React from 'react';
import Banner from '../banner/Banner';
import Courses from '../Courses/Courses';
import Destination from '../Destination/Destination';
import HelpLine from '../HelpLine/HelpLine';
;


const Home = () => {
    return (
        <div id="home">
           <Banner/>
           <HelpLine/>
           <Destination/>
          <Courses/>
          
        </div>
    );
};

export default Home;