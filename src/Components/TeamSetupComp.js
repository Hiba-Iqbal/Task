import React from "react";
import { players } from "../dataSource/data";
import "../style/style.css";

const TeamSetupComp = ({ teamId }) => {
  // Get the players for the specified team
  const teamPlayers = players.filter((player) => player.teamId === teamId);

  return (
    <div className="team-players">
      <ul className="player-list">
        {teamPlayers.map((player) => (
          <li key={player.id} className="player-item">
            <div className="player-info">
              <h3 className="player-name">{player.name}</h3>
              <p className="player-position">Position: {player.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSetupComp;
