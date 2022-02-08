import React from "react";

// import './card-list.style.css';

import {Card} from "../card/card.component";
import { CardListContainer } from "./card-list.styles";


export const CardList = props => {
  return <CardListContainer>
    {  props.places.map(place => 
      (<Card key={place.id} place={place}/>))}
  </CardListContainer>
};