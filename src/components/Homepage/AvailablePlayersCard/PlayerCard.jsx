import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";

const PlayerCard = ({ playerData }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-md">
        <figure className="p-5">
          <img
            src={playerData.img}
            alt="Shoes"
            className="rounded-xl"
          />
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
          <h3 className="text-lg font-semibold -mt-4">Rating ({playerData.rating}) </h3>
          <div className="flex text-md font-medium text-gray-600 ">
            <p>{playerData.batingStyle}</p>
            <p className="text-right">{playerData.bowlingStyle}</p>
          </div>
          <div className="card-actions flex items-center justify-between mt-4">
            <h3 className="text-xl font-bold">Price: ${playerData.price}</h3>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
