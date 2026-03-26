import React, { use, useState } from "react";

import AvailablePlayers from "./available players/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const PlayersCardSection = ({ playersDataPromise, coin, setCoin }) => {
  const playersData = use(playersDataPromise);
  const [selectedType , setSelectedType] = useState("available")
  const [selectedPlayers , setSelectedPlayers] = useState([])

  return (
    <div className="w-11/12 mx-auto py-14">
      <div className="flex justify-center sm:justify-between flex-wrap gap-6">
        {
            selectedType === 'available' ? <h2 className="text-3xl font-bold">Available Players</h2> : <h2 className="text-3xl font-bold">Selected Player ({selectedPlayers.length}/{playersData.length})</h2>
        }
        <div className="">
          <button onClick={()=> setSelectedType('available')} className={`btn rounded-r-none rounded-l-xl ${selectedType === 'available' ?"bg-[#E7FE29]" : '' } `}>Available</button>
          <button onClick={()=> setSelectedType('selected')} className={`btn rounded-l-none rounded-r-xl ${selectedType === 'selected' ?"bg-[#E7FE29]" : '' } `}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>
      <div className="mt-8">
        {
            selectedType === 'available' ? <AvailablePlayers setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} playersData={playersData}></AvailablePlayers> : <SelectedPlayers coin = {coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} playersData={playersData}></SelectedPlayers>
        }
      </div>
    </div>
  );
};

export default PlayersCardSection;
