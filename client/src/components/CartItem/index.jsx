import React from 'react';
import { REMOVE_FROM_CART } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

const CartItem = ({ item }) => {
    const [state, dispatch] = useStoreContext();
    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    return (

        <Card p={5} shadow="lg">

            {/* <CardImg src={item.image} mt="4" /> */}
            <CardBody p="4">
                <CardTitle >{item.name}</CardTitle>
                <CardText mt={4}>$ {item.price}</CardText>
                <CardText mt={4}>Size: {item.customize.size} </CardText>
                <CardText mt={4}>Milk: {item.customize.milk}</CardText>
                <CardText mt={4}>Add Drizzle: {item.customize.drizzle}</CardText>
                <CardText mt={4}>Add Syrups: {item.customize.addSyrups}</CardText>
                <CardText mt={4}>Syrup Amount: {item.customize.syrup}</CardText>
                <CardText mt={4}>Sauces: {item.customize.sauces}</CardText>
                <Button onClick={removeFromCart} size="xl">Remove</Button>
            </CardBody>

        </Card>

    )
}

export default CartItem;