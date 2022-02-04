import React from 'react';
import { useParams } from 'react-router-dom';

// import Drinks from './Drinks';
import { useQuery } from '@apollo/client';
import {QUERY_ONE_DRINK } from '../utils/queries';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleDrink= (props) => {
  const { id: drinkid } = useParams();
  console.log(drinkid);
  const { loading, data } = useQuery(QUERY_ONE_DRINK, {
    variables: { id: drinkid },
    onCompleted:(data)=>{
      console.log(data);
    }
  });

  const drink = data?.drink || {};
  console.log(drink);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello single drinks</h1>
      {/* <p>{drinkid}</p> */}
      <Card
            bg={'success'}
            key={drink.id}
            text={'success' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{drink.drinkname} </Card.Title>
              <Card.Text>
               CA${drink.price}<br/>
               {drink.size}
              </Card.Text>
              <Link to={`/drinksupdate/${drink.id}`}><Button>Update</Button></Link>
            </Card.Body>
          </Card>
      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SingleDrink;
