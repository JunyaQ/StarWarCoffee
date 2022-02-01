import React from 'react';
import { Link } from 'react-router-dom';

const DrinkList = ({drinks, title }) => {
  if (!drinks.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {drinks &&
        drinks.map(drink => (
          <div key={drink.id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${drink.drinkname}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {drink.drinkname}
              </Link>{' '}
              thought on aaaaaaa{drink.drinkname}
            </p>
            <div className="card-body">
              <Link to={`/thought/${drink.id}`}>
                <p>{drink.price}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DrinkList;
