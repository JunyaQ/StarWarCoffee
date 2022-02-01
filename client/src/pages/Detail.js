import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_PRODUCTS as QUERY_DRINKS } from '../utils/queries';

function Detail() {
  const { id } = useParams();

  const [currentDrink, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_DRINKS);

  const drinks = data?.drinks || [];

  useEffect(() => {
    if (drinks.length) {
      setCurrentProduct(drinks.find((product) => product.id === id));
    }
  }, [drinks, id]);

  return (
    <>
      {currentDrink ? (
        <div className="container my-1">
          <Link to="/drinks">← Back to Drinks</Link>

          <h2>{currentDrink.name}</h2>

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
