import React from "react";

const NavBar = props => (
  <header  className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="f6 fw6 ttu tracked">
      <h1 className="link dim white dib mr3"  title="Home">South Park Memory Game!!!</h1>
      <h2 className="link dim white dib mr3" >Status: {props.status}</h2>
      <h2 className="link dim white dib mr3" title="Store">Score: {props.currentScore}</h2>
      <h2 className="link dim white dib" title="Contact">Top Score: {props.topScore}</h2>
    </nav>
  </header>
)

export default NavBar;