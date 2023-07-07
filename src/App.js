import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MatchScheduling from "./pages/matchScheduling/MatchScheduling";
import TeamSetup from "./pages/teamSetup/TeamSetup";
import Scorecard from "./pages/scorecard/Scorecard";
import Bar from "./Components/Bar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Bar />
        <div className="page-container">
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route
              exact
              path="/match-scheduling"
              element={<MatchScheduling />}
            ></Route>
            <Route exact path="/team-setup" element={<TeamSetup />}></Route>
            <Route exact path="/scorecard" element={<Scorecard />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
