import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_DRINKS } from '../../utils/mutations';

// import { QUERY_DRINKS, QUERY_ME } from '../../utils/queries';

const DrinkForm = (props) => {
  const [formState, setFormState] = useState({
    drinkname:'',
    size:'',
    price:'',
    category:'',
  });
  const [addDrink, { error }] = useMutation(ADD_DRINKS);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

   
      await addDrink({
        variables: { ...formState },
      });

      
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
              <label for="password"><b>Category:</b></label>
              <input
                className="form-input"
                placeholder="category"
                name="category"
                type="category"
                id="category"
                value={formState.category}
                onChange={handleChange}
                required
              />
              <button className="addbtn" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Add fail</div>}
          </div>
        </div>
      </div>
    </main>
  );
};
export default DrinkForm;
