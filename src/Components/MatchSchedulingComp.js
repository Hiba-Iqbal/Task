import React from "react";
import "../style/style.css";

const MatchSchedulingComp = ({ matches }) => {
  return (
    <div className="match-scheduling-container">
      <h2 className="page-title">Match Scheduling</h2>
      {matches.map((match) => (
        <div className="match-card" key={match.id}>
          <div className="match-info">
            <div className="team-names">
              <span className="home-team">{match.homeTeam}</span>
              <span className="vs">vs</span>
              <span className="away-team">{match.opponent}</span>
            </div>
            <div className="match-time">{`${match.startTime} - ${match.endTime}`}</div>
            <div className="venue">{match.ground}</div>
          </div>
          <div className="match-progress">
            <div
              className="progress-bar"
              style={{ width: `${match.progress}%` }}
            ></div>
            <div className="progress-label">{`${match.progress}%`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchSchedulingComp;
