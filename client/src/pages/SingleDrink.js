import React from 'react';
import { useParams } from 'react-router-dom';

import Drinks from './Drinks';
import { useQuery } from '@apollo/client';
import {QUERY_ONE_DRINK } from '../utils/queries';

const SingleDrink= (props) => {
  const { id: drinkid } = useParams();

  const { loading, data } = useQuery(QUERY_ONE_DRINK, {
    variables: { id: drinkid },
  });

  const drink = data?.drink || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello single drinks</h1>
      <p>{drink.dinkname}</p>
      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SingleDrink;
