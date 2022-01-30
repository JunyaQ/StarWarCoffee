import { useQuery } from "@apollo/client";
import {Navbar,Nav,NavDropdown, Container} from "react-bootstrap";
import React from "react";
import { ButtonGroup } from "react-bootstrap";
import {QUERY_CATEGORIES} from "../utils/queries";


const Category = () => {
  const { data, loading, error } = useQuery(QUERY_CATEGORIES);
  

  if (loading) return "Loading categories...";
  if (error) return <pre>{error.message}</pre>


  

  return (
    <div>
      <h1>Coffe Menu</h1>
      <div>
        {data.categories.map((category) => (
          // <li key={category.id}>{category.catname}
          // <p>{category.subcatname}</p>
          // </li>
          <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">{category.catname}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={category.subcatname}
          menuVariant="dark"
        >
          {/* change href
          <NavDropdown.Item href="/">{category.catsubname}</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        ))}
      </div>

      <div>

      </div>

    </div>
  );
}

export default Category;