import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import backgroundimg from "../img/home.jpg"


function Home() {

return (
<div>
<img src={backgroundimg} alt="background" className='background'/>
<Button className='mt-4' variant='success' href='/drinks' size='lg'>
Check All Drinks
</Button>


</div>

)
}

export default Home;