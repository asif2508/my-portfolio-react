import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          {/* <About></About> */}
          <section className='pt-32'>
            <Skills></Skills>
          </section>
          <section className='pt-32'>
            <Projects></Projects>
          </section>
          <section className='pt-32'>
            <Contact></Contact>
          </section>
        </div>
    );
};

export default Home;