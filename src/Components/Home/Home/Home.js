import React from 'react';
import Banner from '../banner/Banner';
import Courses from '../Courses/Courses';
import Destination from '../Destination/Destination';
import Footer from '../Footer/Footer';
import HelpLine from '../HelpLine/HelpLine';
;


const Home = () => {
    return (
        <div id="home">
           <Banner/>
           <HelpLine/>
           <Destination/>
          <Courses/>
          <Footer/>
        </div>
    );
};

export default Home;