import React from "react";

// import "./card.style.css";
import { CardContainer } from "./card.styles";

export const Card = props => {
  return <CardContainer>
          <img src={props.place.image} alt="photos" width='100%' />
          <h2>{props.place.name}</h2>
          <p>{props.place.description}</p>
        </CardContainer>
}