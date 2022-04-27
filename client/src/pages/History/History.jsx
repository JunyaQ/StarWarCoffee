import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";


import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderList({ name, price, ...rest }) {
  return (
      <div>
    {/* <p>{...rest}</p> */}
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}

function History() {
  const { data } = useQuery(QUERY_USER);
  let user;
  console.log(data)
  if (data) {
    user = data.user;
  }


  return (

    <div>
      <div>
        <div>
          <div className="text-center">
            {user ? (
              <>
                {<h1 className='mb-4 text-center'>{user.firstName} {user.lastName}'s Order History</h1>}

                {user.orders.map((order) => (
                  <div key={order._id}>

                    <div>
                      <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                      {order.drinks.map(({ _id, image, name, price }, index) => (
                        <div className="justify-content-md-center">
                        <div xs={6} md={4} key={index}>
                          <a href='/menu'>
                            {/* <img src={`${image}`} alt={name} /> */}
                            <div >
                              {name}
                              <br></br>
                                                ${price}
                            </div>

                          </a>
                        </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
 
              </>
            ) : null}
          </div>
        </div>

      </div>
    </div>

  );
};


export default History;