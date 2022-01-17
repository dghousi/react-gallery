import React from "react";

import './card-list.style.css';

import {Card} from "../card/card.component";

export const CardList = props => {
  return <div className='card-list'>
    {  props.places.map(place => 
      (<Card key={place.id} place={place}/>))}
  </div>
};