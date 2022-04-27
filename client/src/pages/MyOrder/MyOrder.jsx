import React, { useEffect } from 'react';
import Auth from "../../utils/auth";
import CartItem from '../../components/CartItem';
import { useStoreContext } from "../../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../../utils/queries"
import { useLazyQuery } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button} from 'reactstrap';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const MyOrder = () => {
  var sum =0;
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
console.log(state);
useEffect(() => {
  if (data) {
    stripePromise.then((res) => {
      res.redirectToCheckout({ sessionId: data.checkout.session })
    })
  }
}, [data]);  

useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, drinks: [...cart] })
    };
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);



  function calculateVenti() {
    console.log(state.cart);
    state.cart.forEach(item => {
      console.log(item);
      if (item.customize.size === 'Venti') {
        sum = sum +1
      }
    });
    return sum.toFixed(2);
  }
function calculateTall(){
  state.cart.forEach(item => {
    console.log(item);
    if(item.customize.size === 'Tall'){
      sum = sum -0.5
    }
  });
  return sum.toFixed(2);
}
function calculateBeverage(){
  state.cart.forEach(item => {
    console.log(item);
    if(item.customize.milk === 'Almond Beverage'||
      item.customize.milk === 'Breve(Half & Half)'||
      item.customize.milk === 'Heavy Cream'||
      item.customize.milk === 'Lactose-Free Beverage'||
      item.customize.milk === 'Nonfat Milk'||
      item.customize.milk === 'Oat Beverage'||
      item.customize.milk === 'Soy Beverage'||
      item.customize.milk === 'Whole Milk'){
      sum = sum +0.8
    }
  });
  return sum.toFixed(2);
}
function calculateDrizzle(){
  state.cart.forEach(item => {
    if(item.customize.drizzle === 'Caramel Drizzle'||
      item.customize.drizzle === 'Mocha Drizzle'){
      sum = sum +0.4
    }
  });
  return sum.toFixed(2);
}
function calculateAddSyrups(){
  state.cart.forEach(item => {
    console.log(item);
    if(item.customize.addSyrups === 'Brow Sugar Syrup'||
      item.customize.addSyrups === 'Caramel Syrup'||
      item.customize.addSyrups === 'Cinnamon Dolce Syrup'||
      item.customize.addSyrups === 'Hazelnut Syrup'||
      item.customize.addSyrups === 'Liquid Cane Sugar'||
      item.customize.addSyrups === 'Peppermint Syrup'||
      item.customize.addSyrups === 'Raspberry Syrup'||
      item.customize.addSyrups === 'Sugar Free Vanilla Syrup'||
      item.customize.addSyrups === 'Toasted Vanilla Syrup'||
      item.customize.addSyrups === 'Toffee Nut Syrup'||
      item.customize.addSyrups === 'Vanilla Syrup'){
      sum = sum +0.6
    }
  });
  return sum.toFixed(2);
}

function calculateSauces(){
  state.cart.forEach(item => {
    if(item.customize.sauces === 'Dark Caramel Sauce'||
      item.customize.sauces === 'Mocha Sauce'||
      item.customize.sauces === 'Pistachio Sauce'||
      item.customize.sauces === 'White Chocolate Mocha Sauce'){
      sum = sum +0.5
    }
  });
  return sum.toFixed(2);
}

function totalprice(){
  state.cart.forEach(item => {
    sum += item.price;
    console.log(sum);
    calculateVenti();
    calculateTall();
    calculateBeverage();
    calculateDrizzle();
    calculateAddSyrups();
    calculateSauces();
  });
  return sum.toFixed(2);
}
  function submitCheckout() {
    const drinkIds = [];

    state.cart.forEach((item) => {
      drinkIds.push(item._id);
    });
    // getCheckout({
    //   variables: { drinks: drinkIds }
    // });
  }

  return (

    <div>
      <Container>
      <h1 className='mb-4 text-center'>Cart</h1>
        <Row>
          <Col>
            
            <div>
              {state.cart.map(item => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </Col>
          <Col>
            <div>
              <h2 className='mt-4'>Total : ${totalprice()}</h2>
              {Auth.loggedIn() ?
              
                        <Button onClick={submitCheckout} type='submit'>Checkout</Button>
                :
                <span>Log in to check out!</span>
              }
            </div>

          </Col>
        </Row>

      </Container>
    </div>

  );

 };

export default MyOrder;