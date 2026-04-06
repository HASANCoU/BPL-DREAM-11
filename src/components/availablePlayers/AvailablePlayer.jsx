import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const AvailablePlayer = ({ player, setCoins, coins,setSelectedPlayers,selectedPlayers }) => {
  const {
    name,
    image,
    country,
    rating,
    price,
    playerType,
    battingType,
    ballingType,
  } = player;
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    setIsSelected(true);

    setSelectedPlayers([...selectedPlayers,player]);

    if (coins >= price) {
      setCoins(coins - price);
      toast.success(`${name} is Selected!!`);
    } else {
      toast.error(`Insufficient Balance`);
    }
  };

  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex gap-1 items-center">
          <FaUser />
          <h2 className="card-title">{name}</h2>
        </div>

        <div className="flex justify-between items-center gap-2">
          <FaFlag />
          <p>{country}</p>
          <button className="btn">{playerType}</button>
        </div>

        <div className="divider"></div>

        <div>
          <h2 className="font-semibold">{rating}</h2>
        </div>

        <div className="flex justify-between">
          <h2 className="font-semibold">{ballingType}t</h2>
          <h2 className="font-semibold">{battingType}</h2>
        </div>
        <div className="card-actions justify-between items-center">
          <h2 className="font-semibold">Price: ${price}</h2>
          <button
            onClick={handleChoosePlayer}
            className="btn"
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
