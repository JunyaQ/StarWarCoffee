import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap';

function NoMatchStrap(props) {
  return(
    <Container fluid>
      <Row>
        <Col className='text-center'>
        <h1 className="mt-4">Sorry, the page that you are looking for is not here</h1>
          <Image fluid src="./images/sad_puppy.jpg" alt="sad puppy" />
        
          <Button className="m-4" variant='secondary' href='/menu' size='lg' >
              Check Out Our Menu
          </Button>
          
        </Col>
     
      </Row>
    </Container>

  )
}

export default NoMatchStrap;
