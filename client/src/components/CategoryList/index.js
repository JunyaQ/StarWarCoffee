import { useQuery } from "@apollo/client";
import {Navbar,Nav,Container} from "react-bootstrap";
import React from "react";
import {QUERY_CATEGORIES} from "../../utils/queries";


const CategoryList = () => {
const { data, loading, error } = useQuery(QUERY_CATEGORIES);


if (loading) return "Loading categories...";
if (error) return <pre>{error.message}</pre>



return (

<div>

  <Navbar bg="success" variant="dark">
    <Container>
    {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
  
    </Container>
  </Navbar>
{data.categories.map((category) => (
  // <li key={category.id}>{category.catname}
  // <p>{category.subcatname}</p>
  // </li>
    <Nav className="maincolor">
      <Nav.Link href="{category.id}" style={{ color: 'white' }}>{category.catname}</Nav.Link>
    </Nav>
   
))}

</div>
);
}

export default CategoryList;