import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';


import CategoryMenu from "../../components/CategoryMenu";
import DrinkList from "../../components/DrinkList";
//import DrinkCard from '../components/DrinkCard';
import { QUERY_ALL_DRINKS } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ALL_DRINKS);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DRINKS,
                drinks: data.drinks
            });

            data.drinks.forEach((item) => {
                idbPromise('drinks', 'put', item);
            });
        } else if (!loading) {
            idbPromise('drinks', 'get').then((drinks) => {
                dispatch({
                    type: UPDATE_DRINKS, 
                    drinks: drinks
                })
            })
        }
    }, [loading, data, dispatch]);

    return (
        <div>
            <div>
                <div>
                    <div>
                        <CategoryMenu />
                    </div>
                    <DrinkList drinks={state.drinks}/>
                </div>
            </div>
            
        </div>
    );
};


export default Menu;