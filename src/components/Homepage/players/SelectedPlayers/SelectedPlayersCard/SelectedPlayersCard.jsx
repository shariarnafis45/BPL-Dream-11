import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const SelectedPlayersCard = ({ selectedPlayer, selectedPlayers,setSelectedPlayers, coin, setCoin }) => {
  const handleSelectedPlayerDeleteBtn = (selectedPlayer) => {
    const filterSelecetdPlayers = selectedPlayers.filter(
      (newselectedPlayer) =>
        newselectedPlayer.playerName != selectedPlayer.playerName,
    );
    setCoin(coin + selectedPlayer.price)
    setSelectedPlayers([...filterSelecetdPlayers])
  };
  return (
    <div className="flex justify-between shadow-lg p-5 rounded-xl items-center">
      <div className="flex gap-5 items-center">
        <img src={selectedPlayer.img} alt="" className="w-20 rounded-md" />
        <div className="space-y-2">
          <h2 className="flex gap-2 items-center text-xl font-semibold">
            <FaUser />
            {selectedPlayer.playerName}
          </h2>
          <p>{selectedPlayer.playingStyle}</p>
        </div>
      </div>
      <button
        className="btn text-xl "
        onClick={() => handleSelectedPlayerDeleteBtn(selectedPlayer)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedPlayersCard;
