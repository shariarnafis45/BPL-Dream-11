import React, { use } from "react";
import PlayerCard from "../AvailablePlayersCard/PlayerCard";

const PlayersCardSection = ({ playersDataPromise }) => {
  const playersData = use(playersDataPromise);

  return (
    <div className="pt-14">
        
      <div className="players-card-container w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playersData.map((playerData, index) => (
          <PlayerCard key={index} playerData={playerData}></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default PlayersCardSection;
