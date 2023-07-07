import React from "react";
import "../style/style.css";

const DetailedScoreCard = ({ scores }) => {
  // Extract necessary data from matches
  const {
    homeTeam,
    opponent,
    goalsSavedByGoalkeeper,
    highestScorer,
    mostAssists,
    bestDefence,
  } = scores;

  return (
    <div className="detailed-scorecard">
      <h2 className="scorecard-heading">Match Scorecard</h2>
      <div className="team-info">
        <h3 className="team-name">{homeTeam}</h3>
        <p className="team-stat">
          Goals Saved by Goalkeeper: {goalsSavedByGoalkeeper}
        </p>
        <p className="team-stat">Highest Scorer: {highestScorer}</p>
        <p className="team-stat">Most Assists: {mostAssists}</p>
        <p className="team-stat">Best Defense: {bestDefence}</p>
      </div>
      <div className="team-info">
        <h3 className="team-name">{opponent}</h3>
        <p className="team-stat">
          Goals Saved by Goalkeeper: {goalsSavedByGoalkeeper}
        </p>
        <p className="team-stat">Highest Scorer: {highestScorer}</p>
        <p className="team-stat">Most Assists: {mostAssists}</p>
        <p className="team-stat">Best Defense: {bestDefence}</p>
      </div>
    </div>
  );
};

export default DetailedScoreCard;
