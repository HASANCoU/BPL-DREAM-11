import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';



const ChoosePlayer = ({choosePlayer,selectedPlayers, setSelectedPlayers, coins, setCoins}) => {
    const {name,image,playerType,price,id} = choosePlayer;
    const handleSelectedPlayerDelete = () =>{
        console.log(name, price, id);
        const remainPlayers = selectedPlayers.filter(remainPlayer=> id !== remainPlayer.id);
        setSelectedPlayers(remainPlayers);
        setCoins(coins+price);
        toast.warning(`${name} is Removed!!`);
    }
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
                <button onClick={()=>handleSelectedPlayerDelete(name,price,id)} className='btn text-red-700 w-18'>
                    <MdDelete/>
                </button>
                
            </div>
        </div>
    );
};

export default ChoosePlayer;