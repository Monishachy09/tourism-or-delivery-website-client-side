import React from 'react';
import Banner from '../banner/Banner';
import Destination from '../Destination/Destination';
import HelpLine from '../HelpLine/HelpLine';
import Service from '../services/Service';


const Home = () => {
    return (
        <div id="home">
           <Banner/>
           <HelpLine/>
           {/* <Destination/> */}
           <Service/>
        </div>
    );
};

export default Home;