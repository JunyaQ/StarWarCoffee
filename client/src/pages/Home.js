import { useQuery } from "@apollo/client";
import React from "react";

import DrinkList from "../components/DrinkList";
import CategorykList from "../components/CategoryList";
import { QUERY_CATEGORIES, QUERY_DRINKS } from "../utils/queries";


const Home = () => {
  const {loading,data}= useQuery(QUERY_CATEGORIES);
  //const data = useQuery(QUERY_DRINKS);
  console.log(QUERY_DRINKS);
  const categories = data?.categories||[]
  return (
    <main>
    <div>
   {loading ? (
            <div>Loading, please wait ...</div>
          ) : (
            <CategorykList
              categories={categories}
              title="Some Feed for Thought(s)..."
            />
          )}
    </div>


    {/* <DrinkList 
    drinks={drinks}/> */}
    </main>
  );
};

export default Home;