import React from 'react';
import me from '../../images/me-1.png';
const Banner = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='text-left pt-28'>
                    <h3 className='text-2xl mb-2'>Rakibul Hasan Asif</h3>
                    <h1 className='text-4xl font-bold mb-2'>Full Stack Web Developer</h1>
                    <p className='mb-3'>I implement user interface design and solve user problems with HTML, CSS, Javascript, React JS, Node JS, Express JS, and MongoDB. I have one years of making products that solve user problems and implementing responsive website. I also develop backend with REST API. </p>
                    <button class="btn btn-info btn-sm hover:btn-secondary">Download Resume</button>
                </div>
                <div>
                    <div className="avatar px-28 py-5">
                        <div className="w-49 rounded-full">
                            <img className='bg-primary' src={me} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;