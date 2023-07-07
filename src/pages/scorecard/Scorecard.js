import React from "react";
import DetailedScoreCard from "../../Components/DetailedScoreCard";
import { score } from "../../dataSource/data";

const Scorecard = () => {
  return (
    <div className="detailed-scorecard-container">
      <h1 className="detailed-scorecard-heading">Scorecard</h1>
      <div className="detailed-scorecard-list">
        {score.map((scores) => (
          <DetailedScoreCard scores={scores} />
        ))}
      </div>
    </div>
  );
};

export default Scorecard;
