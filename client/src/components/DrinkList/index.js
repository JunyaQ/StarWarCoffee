import {React} from 'react';
import { Link } from 'react-router-dom';


const DrinkList = ({drinks,title})=>{
    console.log("from drink list: "+drinks);
    if(!drinks.length){
        return<h3>We are out of stock</h3>
    }

    return(
        <div>
            <h3>{title}</h3>
            {drinks && drinks.map((drink) =>(
                <div key={drink.id}>
                    <p>
                    {drink.drinkname}
                    {drink.price}
                    {drink.size}
                    </p>
                </div>
            ))}
            </div>
    )
    
}
export default DrinkList;