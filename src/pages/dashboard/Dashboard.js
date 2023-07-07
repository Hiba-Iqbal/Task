import React from "react";
import IndividualPlayerPerformance from "../../Components/IndividualPlayerPerformance";
import TeamPerformance from "../../Components/TeamPerformance";
import UpcomingMatches from "../../Components/UpcomingMatches";
import { matches, players, teams } from "../../dataSource/data";
import "../../style/style.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <h2 className="section-title">Individual Players' Performance</h2>
        <IndividualPlayerPerformance players={players} />
      </div>

      <div className="dashboard-item">
        <h2 className="section-title">Teams Performance</h2>
        <TeamPerformance teams={teams} />
      </div>

      <div className="dashboard-item">
        <h2 className="section-title">Upcoming Matches</h2>
        <UpcomingMatches matches={matches} />
      </div>
    </div>
  );
};

export default Dashboard;
