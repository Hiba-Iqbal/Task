import React from "react";
import TeamSetupComp from "../../Components/TeamSetupComp";
import { teams } from "../../dataSource/data";
import "../../style/style.css";

const TeamSetup = () => {
  return (
    <div className="team-setup-container">
      <h1 className="team-setup-heading">Team Setups</h1>
      {teams.map((team) => (
        <div key={team.id} className="team-setup">
          <h2 className="team-name">{team.name}</h2>
          <TeamSetupComp teamId={team.id} />
        </div>
      ))}
    </div>
  );
};

export default TeamSetup;
