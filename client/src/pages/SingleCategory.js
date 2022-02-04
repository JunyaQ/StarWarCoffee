import React from 'react';
import { useParams } from 'react-router-dom';
// import Drinks from './Drinks';
import { useQuery } from '@apollo/client';
import {QUERY_DRINKS } from '../utils/queries';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {categorized} from "../utils/categorize";

const SingleCategory= (props) => {
  const { id: catid } = useParams();
  console.log("this:"+catid);
  const { loading, data } = useQuery(QUERY_DRINKS, {
    variables: { id: catid },
    // onCompleted:(data)=>{
    //   console.log(data);
    // }
  });

  const category = data?.category || {};
//   console.log(category);

  if (loading) {
    return <div>Loading...</div>;
  }
  const getdata = async()=>{
    const list =  categorized.categorized(data, catid);
console.log(list);
  }

  return (
    <div>
      <h1>Hello single category</h1>
      
      <p>{category}</p>
      
      {/* <Card
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
          </Card> */}
      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SingleCategory;