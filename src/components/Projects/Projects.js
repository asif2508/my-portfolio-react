import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className='mb-12'>
            <h1 className='text-3xl mt-6 font-bold mb-5'>My Projects</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    projects.map((project, index) => <Project
                        key={index}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;