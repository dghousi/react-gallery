import React from "react";

import "./card.style.css";

export const Card = props => {
  return <div className='card-container'>
          <img src={props.place.image} alt="photos" width='100%' />
          <h2>{props.place.name}</h2>
          <p>{props.place.description}</p>
        </div>
}