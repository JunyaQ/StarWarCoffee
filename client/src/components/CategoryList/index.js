import {React} from 'react';
import { Link } from 'react-router-dom';



const CategorykList = ({categories})=>{
    console.log("from drink list: "+categories);
    


    return(
        <div>
            
            {categories && categories.map((category) =>(
                <div key={category.id}>
                    <p>
                    {category.drinkname}
                    {category.price}
                    {category.size}
                    </p>
                </div>
            ))}
            </div>
    )
    
}
export default CategorykList;