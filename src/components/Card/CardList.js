import React from 'react';
import Card from './Card';

const CardList = ({ stores }) => {
  return (
    <div>
      {
        stores.map((user, i) => {
          return (
            <Card
              key={i}
              image={stores[i].image_url}
              name={stores[i].name}
              cuisine={stores[i].categories[0].title}
              address={stores[i].location.address1}
              city={stores[i].location.city}
              phone={stores[i].phone}
              rating={stores[i].rating}
              link={stores[i].url}              
            />
          );
        })
      }
    </div>
  );
}

export default CardList;