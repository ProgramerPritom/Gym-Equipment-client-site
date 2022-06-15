import React from 'react';
 
import BlogDisplay from '../BlogDisplay/BlogDisplay';
import CatagoryDisplay from '../Catagory/Catagory-display/CatagoryDisplay';
import Collection from '../Collection/Collection';
import Slider from '../Slider/Slider';
import './Home.css';
import AccordingPart from '../AccordingPart/AccordingPart';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Collection></Collection>
            <CatagoryDisplay></CatagoryDisplay>
            <BlogDisplay></BlogDisplay>
            <AccordingPart></AccordingPart>
            
        </div>
    );
};

export default Home;