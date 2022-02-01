import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {QUERY_DRINKS } from '../utils/queries';

function Detail() {
  const { id } = useParams();

  const [currentDrink, setCurrentDrink] = useState({});

  const { loading, data } = useQuery(QUERY_DRINKS);

  const drinks = data?.drinks || [];

  useEffect(() => {
    if (drinks.length) {
      setCurrentDrink(drinks.find((drink) => drink.id === id));
    }
  }, [drinks, id]);

  return (
    <>
      {currentDrink ? (
        <div className="container my-1">
          <Link to="/drinks">← Back to Drinks</Link>

          <h2>{currentDrink.drinkname}</h2>

          <p>{currentDrink.description}</p>

          <p>
            <strong>Price:</strong>${currentDrink.price}{' '}
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
          </p>
        </div>
      ) : null}
      {loading? "loading...":null}
    </>
  );
}

export default Detail;
