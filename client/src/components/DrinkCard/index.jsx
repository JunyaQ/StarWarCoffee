import React from 'react';
import { ADD_TO_CART} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Collapse, Card, CardTitle, CardText, CardBody, CardImg, UncontrolledPopover, PopoverHeader } from 'reactstrap';
function DrinkCard({ item }) {
    const [show, setShow] = React.useState(false);
    const [customize, setCustomize] = React.useState({milk:"", flavor:"", size:""})
    const handleToggle = () => setShow(!show);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const {

        _id,

    } = item;

    const onChange = (e) => {
        const {name, value} = e.target
        setCustomize({...customize, [name]: value })
    }

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
            item.customize = customize;
            dispatch({
                type: ADD_TO_CART,
                item: { ...item}
            });
            idbPromise('cart', 'put', { ...item});
        }
        console.log(cart);

    return (
        <div flexWrap="wrap" alignItems="center" justifyContent="center" maxW="500px" m="10">
            <Card flexShrink="0" maxW="lg" bg="white.2" textAlign="center" flexBasis={['auto', '80%']}
                width={[
                    "100%", // base
                    "50%", // 480px upwards
                    "25%", // 768px upwards
                    "15%", // 992px upwards
                ]}>
                <CardImg src={item.image} mt="10%" />
                <CardBody p="4">
                    <CardTitle mt="1" fontWeight="semibold" as="h3" lineHeight="tight" >
                        {item.name} &nbsp;
                    ${item.price}
                    </CardTitle>
                    <CardText as="span" fontSize="sm">
                        {item.description}
                    </CardText>

                    <Button id="PopoverFocus" type="button" className="m-2" 
                        onClick={addToCart}>
                        Add to Cart
                    </Button>
                    <Button className="m-2"
                    onClick={handleToggle}
                        >
                        Customize
                    </Button>{'  '}
                    <Collapse mt={4} isOpen={show}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Size: Venti(+$1.00), Tall(-$0.50)</Label>
                                <Input type="select" name="size" id="exampleSelect" onChange={onChange}>
                                    <option>Select</option>
                                    <option>Grande</option>
                                    <option>Tall</option>
                                    <option>Venti</option>
                                </Input>
                                <Label for="exampleSelect"> Milk: 2% by Default, other Beverages ($+0.80)</Label>
                                <Input type="select" name="milk" id="exampleSelect" onChange={onChange}>
                                    <option>Select</option>
                                    <option>2% Milk</option>
                                    <option>Almond Beverage</option>
                                    <option>Breve(Half & Half)</option>
                                    <option>Heavy Cream</option>
                                    <option>Lactose-Free Beverage</option>
                                    <option>Nonfat Milk</option>
                                    <option>Oat Beverage</option>
                                    <option>Soy Beverage</option>
                                    <option>Whole Milk</option>
                                </Input>
                                <Label for="exampleSelect">Add Drizzle (+$0.40)</Label>
                                <Input type="select" name="drizzle" id="exampleSelect" onChange={onChange}>
                                <option>Select</option>
                                <option>No Drizzle</option>
                                <option>Caramel Drizzle</option>
                                <option>Mocha Drizzle</option>
                                </Input>

                                <Label for="exampleSelect">Choose Syrups: add Syrups (+$0.60)</Label>
                                <Input type="select" name="addSyrups" id="exampleSelect" onChange={onChange}>
                                <option>Select</option>
                                <option>No Syrup</option>
                                <option>Brow Sugar Syrup</option>
                                <option>Caramel Syrup</option>
                                <option>Cinnamon Dolce Syrup</option>
                                <option>Hazelnut Syrup</option>
                                <option>Liquid Cane Sugar</option>
                                <option>Peppermint Syrup</option>
                                <option>Raspberry Syrup</option>
                                <option>Sugar Free Vanilla Syrup</option>
                                <option>Toasted Vanilla Syrup</option>
                                <option>Toffee Nut Syrup</option>
                                <option>Vanilla Syrup</option>
                                </Input>

                                <Label for="exampleSelect">Syrup</Label>
                                <Input type="select" name="syrup" id="exampleSelect" onChange={onChange}>
                                <option>Select</option>
                                <option>Normal Syrup</option>
                                <option>No Syrup</option>
                                <option>Light Syrup</option>
                                <option>Extra Syrup</option>
                                </Input>

                                <Label for="exampleSelect">Sauces: add Sauces (+0.50)</Label>
                                <Input type="select" name="sauces" id="exampleSelect" onChange={onChange}>
                                <option>Select</option>
                                <option>No Sauce</option>
                                <option>Dark Caramel Sauce</option>
                                <option>Mocha Sauce</option>
                                <option>Pistachio Sauce</option>
                                <option>White Chocolate Mocha Sauce</option>
                                </Input>
{/* 
                                <Label for="exampleSelect">Size</Label>
                                <Input type="select" name="size" id="exampleSelect" onChange={onChange}>
                                <option></option>
                                </Input> */}

                                
                            </FormGroup>
                            </Form>
                            
                    </Collapse>
                    <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                        <PopoverHeader>Item added to cart!</PopoverHeader>   
                    </UncontrolledPopover>
                   
                </CardBody>
            </Card>
        </div>
    );
}
export default DrinkCard;