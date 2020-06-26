import React from "react";

const NavBar = props => (
  <header className="navbar-container">
      <h1 className="instructions"  title="Home">South Park Memory Game!!!</h1>
      <h2 className="instructions">Click on an image to earn points, but don't click on any more than once!</h2>
      <h2 className="instructions top-score" title="Contact">Top Score: {props.topScore}</h2>
      <h2 className="instructions score" title="Store">Score: {props.currentScore}</h2>
  </header>
)

export default NavBar;