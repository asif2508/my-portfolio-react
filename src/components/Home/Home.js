import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          {/* <About></About> */}
          <section className='py-32'>
            <Skills></Skills>
          </section>
        </div>
    );
};

export default Home;