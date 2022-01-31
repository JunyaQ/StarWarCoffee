import React from 'react';
import { useParams } from 'react-router-dom';


import { useQuery } from '@apollo/client';
import { QUERY_CATDRINK } from '../utils/queries';

const SingleDrink= (props) => {
  const { id: categoryid } = useParams();

  const { loading, data } = useQuery(QUERY_CATDRINK, {
    variables: { id: categoryid },
  });

  const category = data?.category || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{category.catname}</p>
      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SingleDrink;
