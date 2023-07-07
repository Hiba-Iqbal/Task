import React from "react";
import { matches } from "../../dataSource/data";
import MatchSchedulingComp from "../../Components/MatchSchedulingComp";

const MatchScheduling = () => {
  return <MatchSchedulingComp matches={matches} />;
};

export default MatchScheduling;
