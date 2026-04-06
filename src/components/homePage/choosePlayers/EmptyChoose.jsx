import React from 'react';
import { MdHourglassEmpty } from 'react-icons/md';

const EmptyChoose = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 border rounded-md mt-5 p-30'>
            <MdHourglassEmpty className='text-6xl'/>
            <h2 className='text-4xl font-bold'>No Player is Selected!!</h2>
        </div>
    );
};

export default EmptyChoose;