import React from 'react';
import me from '../../images/me-2.png';
import './About.css';
const About = () => {
    return (
        <div>
            <div className='flex content-center'>
                    <div className="avatar py-12">
                        <div class="avatar">
                            <div class="avater-size">
                                <img className='bg-primary' src={me} />
                            </div>
                        </div>
                    </div>
                    <div className='text-left py-20'>
                        <p className=' mb-3'>I implement user interface design and solve user problems with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website.
I implement user interface design and solve user problems with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website.I implement user interface design and solve user problems with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website. </p>
                        <button class="btn btn-info btn-sm hover:btn-secondary">Contact Me</button>
                    </div>
                </div>
            </div>
            );
};

            export default About;