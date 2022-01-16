import React from "react";

import "./card.style.css";
import {Image} from '../image/image.component';
export const Card = props => {
  return <div className='card-container'>
          <Image placeId={props.place.id}/>  
          <h2>{props.place.name}</h2>
          <p>{props.place.description}</p>
        </div>
}