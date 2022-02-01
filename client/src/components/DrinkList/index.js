import React from 'react';
import { useQuery } from '@apollo/client';

import DrinkItem from '../DrinkItem';
import {QUERY_DRINKS} from '../../utils/queries';

function DrinkList({ currentCategory }) {
  const { loading, data } = useQuery(QUERY_DRINKS);

  const drinks = data?.drinks || [];

  function filterDrinks() {
    if (!currentCategory) {
      return drinks;
    }

    return drinks.filter(
      (drink) => drink.category.id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Drinks:</h2>
      {drinks.length ? (
        <div className="flex-row">
          {filterDrinks().map((drink) => (
            <DrinkItem
              key={drink._id}
              _id={drink._id}
              name={drink.drinkname}
              price={drink.price}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading? "loading...":null}
    </div>
  );
}

export default DrinkList;
