import React from "react";
import firebase from "firebase";

var database = firebase.database();

database.ref().push({
  name: "Andrew",
  highscore: 8,
});



const LeaderBoard = props => (
  <div className="leaderBoard-container">
    <h2>LeaderBoard</h2>
    <li></li>
  </div>
)


export default LeaderBoard;