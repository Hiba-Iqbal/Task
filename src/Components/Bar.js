import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

function Bar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link
            exact
            to="/"
            activeClassName="active"
            className="sidebar-menu-item"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/match-scheduling"
            activeClassName="active"
            className="sidebar-menu-item"
          >
            Match Scheduling
          </Link>
        </li>
        <li>
          <Link
            to="/team-setup"
            activeClassName="active"
            className="sidebar-menu-item"
          >
            Team Setup
          </Link>
        </li>
        <li>
          <Link
            to="/scorecard"
            activeClassName="active"
            className="sidebar-menu-item"
          >
            Detailed Scorecard
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Bar;
