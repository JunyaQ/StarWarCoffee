import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_DRINK } from '../../utils/mutations';
//import { QUERY_DRINKS } from '../../utils/queries';
import { QUERY_DRINKS, QUERY_ME } from '../../utils/queries';


const DrinkForm = (props) => {

  const [formState, setFormState] = useState({
    drinkname:'',
    size:'',
    price:'',
 //   category:'',
    description:'',
  });
  const [addDrink, { error }] = useMutation(ADD_DRINK, {
    update(cache, { data: { addDrink } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { drinks } = cache.readQuery({ query: QUERY_DRINKS });
        cache.writeQuery({
          query: QUERY_DRINKS,
          data: { addone: [addDrink, ...drinks] },
        });
      } catch (e) {
        console.error(e);
      }
        // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, addone: [...me.drinks, addDrink] } },
      });
      console.log("add drink data: "+JSON.stringify(addDrink));
   

    
    },
  });
 
      // console.log("addDrink: "+ formState.drinkname);
      // console.log("size: "+ formState.size);
      // console.log("price: "+formState.price);
      // console.log("category: "+ formState.category);
      // console.log("description: "+formState.description);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,//from formstate, all teh name and related value in the form
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

   
    try {
       await addDrink({
        variables: { ...formState },// everything in form state
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="form">
          <h4 className="form-header">New Item to the Menu</h4>
          <div className="form-body">
            <form onSubmit={handleFormSubmit}>
            <label for="drinkname"><b>Enter Drink Name:</b></label>
              <input
                className="form-input"
                placeholder="Drink name"
                name="drinkname"
                type="drinkname"
                id="drinkname"
                value={formState.drinkname}
                onChange={handleChange}
                required
              />
            <label for="size"><b>Enter size:</b></label>
            <input
                className="form-input"
                placeholder="size"
                name="size"
                type="size"
                id="size"
                value={formState.size}
                onChange={handleChange}
                required
              />
              <label for="price"><b>Price:</b></label>
              <input
                className="form-input"
                placeholder="Price"
                name="price"
                type="price"
                id="price"
                value={formState.price}
                onChange={handleChange}
                required
              />
              {/* <label for="category"><b>Category:</b></label>
              <input
                className="form-input"
                placeholder="category"
                name="category"
                type="category"
                id="category"
                value={formState.category}
                onChange={handleChange}
                required
              /> */}
              <label for="description"><b>Enter description:</b></label>
            <textarea
                className="form-input"
                placeholder="description"
                name="description"
                type="description"
                id="description"
                value={formState.description}
                onChange={handleChange}
              />
              <button className="addbtn" type="submit">
                Submit
              </button>
            </form>

            {error && <div></div>}
          </div>
        </div>
      </div>
    </main>
  );
};
export default DrinkForm;