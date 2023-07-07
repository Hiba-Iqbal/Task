import React from "react";

const IndividualPlayerPerformance = ({ players }) => {
  return (
    <div className="individual-player-stats-container player-list">
      {players.map((player) => (
        <div className="player-list-item" key={players.id}>
          <h3 className="player-name">{player.name}</h3>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Defense: {player.defense}</p>
        </div>
      ))}
    </div>
  );
};

export default IndividualPlayerPerformance;
