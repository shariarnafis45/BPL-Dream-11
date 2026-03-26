import React from "react";
import SelectedPlayersCard from "./SelectedPlayersCard/SelectedPlayersCard";

const SelectedPlayers = ({
  playersData,
  selectedPlayers,
  setSelectedPlayers,
  coin,setCoin
}) => {
  
  return (
    <div>
      {
        selectedPlayers.map((selectedPlayer, i) => <SelectedPlayersCard coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} key={i} selectedPlayer={selectedPlayer}></SelectedPlayersCard>)
      }
    </div>
  )
}

export default SelectedPlayers;
