import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { QUERY_DRINKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";


function DrinkList({drinks}) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_DRINKS,
          drinks: data.drinks
        });
        data.drinks.forEach((drink) => {
          idbPromise('drinks', 'put', drink);
        });
    } else if (!loading) {
      idbPromise('drinks', 'get').then((drinks) => {
        dispatch({
          type: UPDATE_DRINKS,
         drinks: drinks
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterDrinks() {
    if (!currentCategory) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.category._id === currentCategory);
  }

  return (
    <div>
         <div >
        <div>
            <h2>Pick your drink</h2>
            {state.drinks.length ? (
                <div>
                    {filterDrinks().map(drink => (
                        <DrinkCard
                        key= {drink._id}
                        item={drink}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any drinks yet!</h3>
            )}
            
        </div>
        </div>
    </div>
  );
}

export default DrinkList;
