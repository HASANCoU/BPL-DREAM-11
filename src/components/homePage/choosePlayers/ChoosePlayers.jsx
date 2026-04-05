import React from 'react';
import ChoosePlayer from './ChoosePlayer';

const ChoosePlayers = ({selectedPlayers}) => {
    return (
        <div className='max-w-full space-y-4'>
            {
                selectedPlayers.map((choosePlayer,index)=><ChoosePlayer key={index} choosePlayer={choosePlayer}/>)
            }
        </div>
    );
};

export default ChoosePlayers;