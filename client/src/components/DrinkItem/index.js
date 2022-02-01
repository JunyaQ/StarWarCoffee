import React from "react";
import { Link } from "react-router-dom";


function DrinkItem(item) {
  const {
    id,
    drinkname,
    price,
    size,
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/drinks/${id}`}>
       
        <p>{drinkname}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default DrinkItem;
