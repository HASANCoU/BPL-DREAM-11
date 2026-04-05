import React from 'react';
import { MdDelete } from 'react-icons/md';

const ChoosePlayer = ({choosePlayer}) => {
    const {name,image,playerType} = choosePlayer;
    return (
        <div className='flex justify-between items-center border rounded-md p-4 space-x-2'>
            <div className='flex gap-4 items-center'>
                <img  src={image} alt="Image" className='rounded-md w-20' />
                <div>
                    <h2 className='font-bold'>{name}</h2>
                    <p>{playerType}</p>
                </div>
            </div>
            <div>
                <MdDelete className='btn text-red-700 w-14'/>
            </div>
        </div>
    );
};

export default ChoosePlayer;