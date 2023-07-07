import React from "react";

const TeamPerformance = ({ teams }) => {
  return (
    <div className="teams-performance-container">
      {teams.map((team) => (
        <div className="teams-performance-list" key={team.id}>
          <h3>{team.name}</h3>
          <p>Goals Scored: {team.goalsScored}</p>
          <p>Goals Conceded: {team.goalsConceded}</p>
          <p>Wins: {team.wins}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamPerformance;
