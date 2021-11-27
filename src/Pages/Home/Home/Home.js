import React from 'react';
import Article from '../Article/Article';
import Banner from '../Cover/Banner';
import Services from '../Services/Services';
import TourInfo from '../TourInfo/TourInfo';


// home js file


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TourInfo></TourInfo>
            <Article></Article>
        </div>
    );
};

export default Home;