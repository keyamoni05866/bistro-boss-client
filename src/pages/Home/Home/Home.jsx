import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import HomeCard from '../HomeCard/HomeCard';
import CallSection from '../CallSection/CallSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
                <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
       <div >
       <Banner></Banner>
     
       </div>
 <div>
 <Category>

 </Category>
 </div>
 <About></About>
 <PopularMenu></PopularMenu>
 <CallSection></CallSection>
 <HomeCard></HomeCard>
 <Featured></Featured>
 <Testimonials></Testimonials>
        </div>
    );
};

export default Home;