import React from 'react';
import Auth from '../../utils/auth';
import {Navbar,Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";



function NavigateBar(props) {

  if(Auth.loggedIn()){
    return (
      <div>
        <Navbar bg="success" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/category">Menu</Nav.Link>
        <Nav.Link href="/account">Account</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/home" onClick={()=>Auth.logout}>Logout</Nav.Link>   
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }else {
    return (
      <div>
        <Navbar bg="success" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Link to="/Dashboard"> Dashboard </Link> */}
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/category">Menu</Nav.Link>
      <Nav.Link href="/signup">Sign up</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
  
}

export default NavigateBar;