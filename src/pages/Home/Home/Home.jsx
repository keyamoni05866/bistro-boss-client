import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import About from '../About/About';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
       <div >
       <Banner></Banner>
     
       </div>
 <div>
 <Category>

 </Category>
 </div>
 <About></About>
 <PopularMenu></PopularMenu>
 <Featured></Featured>
 <Testimonials></Testimonials>
        </div>
    );
};

export default Home;