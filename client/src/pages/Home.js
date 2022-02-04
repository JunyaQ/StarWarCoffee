import React from 'react';
import { Button} from 'react-bootstrap';
import background from "../img/background.jpg"




function Home() {

return (
<div>
<img src={background} alt="background" className='background'/>

<Button className='mt-4' variant='success' href='/drinks' size='lg'>
Check All Drinks
</Button>

{/* <DrinkForm/> */}



</div>

)
}

export default Home;