import React from 'react';


const IconCard = props => (
  <div className="card-container">
    <section id={props.id} className="tc pa3 hvr-float-shadow animated zoomInUp" value={props.id} onClick={() =>
    props.clickedPlayer(props.id)
    }>
    <img src={props.image} className="character" alt="game-char" />
    </section>
  </div>
)

export default IconCard;