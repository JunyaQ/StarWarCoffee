import React from 'react';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './nav.css';

import {Container,Navbar,Nav} from 'react-bootstrap';


function NavigateBar(props) {

  if(Auth.loggedIn()){
    return (
      <Navbar bg="success" expand="lg" className='navbar' variant="light">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/menu" className='menubar'>Menu</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/profile" className='profilebar'>Profile</Nav.Link>
            <Nav.Link as={Link} to="/cart" className='cartbar'>Cart</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => Auth.logout()} className='logoutbar'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }else {
    return (
      <Navbar bg="success" expand="lg" className='navbar' variant="light">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
}

export default NavigateBar;