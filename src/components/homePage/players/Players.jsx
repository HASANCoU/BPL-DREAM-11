import React, { use, useState } from 'react';
import AvailablePlayers from '../../availablePlayers/AvailablePlayers';
import ChoosePlayers from '../choosePlayers/ChoosePlayers';

const Players = ({playerPromise,setCoins,coins}) => {
    const players = use(playerPromise);
    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
  
    return (
        <div className='mt-6 mb-30'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-2xl'>{selectedType==="available" ? `Available Players ${players.length} `: `Selected Players ${selectedPlayers.length}/${players.length}`}</h2>

                <div className='btn-groups flex justify-between'>
                    <button onClick={()=>setSelectedType("available")} className={`btn bg- rounded-r-none rounded-xl ${selectedType==="available" ?"bg-[#E7FE29]" :"bg-white"} `}>Available</button>
                    <button onClick={()=>setSelectedType("selected")} className={`btn rounded-l-none rounded-xl ${selectedType==="selected"? "bg-[#e7fe29]" : "bg-white"}`}>Selected</button>
                </div>
            </div>
            <div className='mt-4 w-11/12 mx-auto'>


                { selectedType==="available" ? <AvailablePlayers setSelectedPlayers={setSelectedPlayers}  selectedPlayers={selectedPlayers} setCoins={setCoins} coins={coins} players={players}/> :
                <ChoosePlayers selectedPlayers={selectedPlayers}/>
                }
            </div>
        </div>
    );
};

export default Players;