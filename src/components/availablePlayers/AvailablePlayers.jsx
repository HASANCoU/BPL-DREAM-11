import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ players,setCoins,coins,selectedPlayers,setSelectedPlayers }) => {
  return (
    <div className="grid grid-cols-3 space-y-4 space-x-4 ">
      {players.map((player) => (
        <AvailablePlayer setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} setCoins={setCoins} coins={coins} key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
