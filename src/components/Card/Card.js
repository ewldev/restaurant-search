import React from 'react';
import './card.css';

const Card = ({ image, name, cuisine, address, city, phone, rating }) => {
  return (
    <div className='card tc bg-light-red br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt="" src={image} height="200" width="200"/>
      <div>
        <h2>{name}</h2>
        <p>{cuisine}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <p>Rating: {rating}</p>        
      </div>
    </div>
  );
}

export default Card;