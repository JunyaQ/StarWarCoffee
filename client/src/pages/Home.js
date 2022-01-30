import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import background from "../img/background.jpg"


function Home() {

return (
<div>
<img src={background} alt="background" className='background'/>
<Button className='mt-4' variant='success' href='/drinks' size='lg'>
Check All Drinks
</Button>


</div>

)
}

export default Home;