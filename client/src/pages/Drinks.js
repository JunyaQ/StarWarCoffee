import { useQuery } from "@apollo/client";
import React from "react";
import {QUERY_DRINKS} from "../utils/queries";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Drinks = () => {
    const {data, loading, error}= useQuery(QUERY_DRINKS);
    //const data = useQuery(QUERY_DRINKS);
    // console.log(QUERY_DRINKS);
   if(loading) return"Loading drinks...";
   if(error) return <pre>{error.message}</pre>
    // console.log("here"+drinks);
    return (
      <main>
      <div>
        <h1>List of coffees</h1>
        
          {data.drinks.map((drink)=>(
            // <li key={drink.id}>{drink.drinkname}
            // <p>{drink.id}</p>
            // <p>{drink.price}</p>
            // <p>{drink.size}</p>
            // <p>{drink.category.catname}</p>
        
            // </li>
           
            <Card
            bg={'success'}
            key={drink.id}
            text={'success' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
             <Link to= {`/drinks/${drink.id}`} className="drinklink">
            <Card.Header>{drink.category.catname}</Card.Header>
            <Card.Body>
              <Card.Title>{drink.drinkname} </Card.Title>
              <Card.Text>
               CA${drink.price}<br/>
               {drink.size}
              </Card.Text>
            </Card.Body>
            </Link>
          </Card>
          
 ))}
      </div>
  
  
      {/* <DrinkList 
      drinks={drinks}/> */}
      </main>
  );
}

export default Drinks;