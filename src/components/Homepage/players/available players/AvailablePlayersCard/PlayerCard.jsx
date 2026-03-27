import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";

const PlayerCard = ({
  playerData,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    if (coin < playerData.price) {
      toast.warn('Not Enough Coin', {
        'position' : "top-center",
      })
      return;
    } else {
      toast.success(`${playerData.playerName} Is Selected`, {
        'position' : "top-center"
      })
      setCoin(coin - playerData.price);
    }
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, playerData]);
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-md">
        <figure className="p-5">
          <img src={playerData.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">
            {" "}
            <FaCircleUser></FaCircleUser> {playerData.playerName}
          </h2>
          <div className="flex flex-wrap gap-2">
            <p className="flex items-center gap-2 text-xl text-gray-500 mt-2">
              <IoFlag></IoFlag> {playerData.playerCountry}
            </p>
            <button className="btn">{playerData.playingStyle}</button>
          </div>
          <div className="divider"></div>
          <h3 className="text-lg font-semibold -mt-4">
            Rating ({playerData.rating}){" "}
          </h3>
          <div className="flex text-md font-medium text-gray-600 ">
            <p>{playerData.batingStyle}</p>
            <p className="text-right">{playerData.bowlingStyle}</p>
          </div>
          <div className="card-actions flex items-center justify-between mt-4">
            <h3 className="text-xl font-bold">Price: ${playerData.price}</h3>
            <button
              className="btn"
              onClick={handleChoosePlayer}
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
