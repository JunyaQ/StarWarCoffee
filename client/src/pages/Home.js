import React,{useState} from 'react';
import { Button} from 'react-bootstrap';
import background from "../img/background.jpg"
import CategoryMenu from '../components/CategoryMenu';
import DrinkList from '../components/DrinkList';


import SingleDrink from './SingleDrink';


function Home() {
    const [currentCategory, setCategory] = useState("");

return (
<div>
<img src={background} alt="background" className='background'/>
<CategoryMenu setCategory={setCategory} />  
<DrinkList currentCategory={currentCategory} />
<Button className='mt-4' variant='success' href='/drinks' size='lg'>
Check All Drinks
</Button>

<SingleDrink/>


</div>

)
}

export default Home;