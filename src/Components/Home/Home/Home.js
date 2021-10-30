import React from 'react';
import Banner from '../banner/Banner';
import Destination from '../Destination/Destination';
import HelpLine from '../HelpLine/HelpLine';
import Services from '../services/Services';

const Home = () => {
    return (
        <div id="home">
           <Banner/>
           <HelpLine/>
           {/* <Destination/> */}
           <Services/>
        </div>
    );
};

export default Home;