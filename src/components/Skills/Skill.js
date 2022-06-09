import React from 'react';

const Skill = ({skill}) => {
    const {name, photo} = skill;
    return (
        <div className='bg-primary rounded-md hover:bg-secondary hover:pointer'>
            <div className='flex justify-around items-center p-3'>
            <img src={photo} height='55px' width='55px' alt="" />
            <h1 className='text-xl font-bold p-5'>{name}</h1>
            </div>
        </div>
    );
};

export default Skill;