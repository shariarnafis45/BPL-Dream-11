import React from "react";
import PlayerCard from "./AvailablePlayersCard/PlayerCard";

const AvailablePlayers = ({playersData,coin,setCoin,setSelectedPlayers, selectedPlayers}) => {
  return (
    <div>
      <div className="players-card-container  grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        { playersData.map((playerData, index) => (
          <PlayerCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} key={index} playerData={playerData}></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
