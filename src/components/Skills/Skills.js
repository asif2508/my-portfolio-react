import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('Skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div>
           <h1 className='text-3xl mt-6 font-bold mb-8'>My Skills</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        skills.map((skill, index) => <Skill
                            key={index}
                            skill={skill}
                        ></Skill>)
                    }
                </div> 
        </div>
    );
};

export default Skills;