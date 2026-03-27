import React from "react";
import SelectedPlayersCard from "./SelectedPlayersCard/SelectedPlayersCard";

const SelectedPlayers = ({
  playersData,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  return (
    <div>
      {selectedPlayers.length === 0
        ? <div className="flex justify-center items-center flex-col min-h-[30vh]">
          <h2 className="text-3xl font-bold mb-3">No Player Selected</h2>
          <p>Goto Available Tab To Select Players</p>
        </div>
        : selectedPlayers.map((selectedPlayer, i) => (
            <SelectedPlayersCard
              coin={coin}
              setCoin={setCoin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              key={i}
              selectedPlayer={selectedPlayer}
            ></SelectedPlayersCard>
          ))}
    </div>
  );
};

export default SelectedPlayers;
