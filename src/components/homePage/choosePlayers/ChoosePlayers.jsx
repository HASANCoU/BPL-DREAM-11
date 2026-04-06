import React from "react";
import ChoosePlayer from "./ChoosePlayer";
import EmptyChoose from "./EmptyChoose";

const ChoosePlayers = ({ selectedPlayers,setSelectedPlayers, coins, setCoins }) => {
  const length = selectedPlayers.length;
  return (
    <div className="max-w-full space-y-4">
      {length ? (
        selectedPlayers.map((choosePlayer, index) => (
          <ChoosePlayer key={index} choosePlayer={choosePlayer} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coins={coins} setCoins={setCoins} />
        ))
      ) : (
        <EmptyChoose />
      )}
    </div>
  );
};

export default ChoosePlayers;
