import React from "react";

const UpcomingMatches = ({ matches }) => {
  return (
    <div className="upcoming-matches-container">
      {matches.map((match) => (
        <div className="upcoming-matches-list" key={match.id}>
          <div key={match.id}>
            <h3>Match: {match.id}</h3>
            <p>Home Team: {match.homeTeam}</p>
            <p>Opponent: {match.opponent}</p>
            <p>Date: {match.date}</p>
            <p>Ground: {match.ground}</p>
            <p>Expected Win: {match.expectedWin}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;
