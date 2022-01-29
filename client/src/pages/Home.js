import { useQuery } from "@apollo/client";
import React from "react";

import DrinkList from "../components/DrinkList";
import { QUERY_DRINKS } from "../utils/queries";


const Home = () => {
  const {loading,data}= useQuery(QUERY_DRINKS);
  //const data = useQuery(QUERY_DRINKS);
  console.log(QUERY_DRINKS);
  const drinks = data?.dinks||[]
  return (
    <main>
    <div>
   {loading ? (
            <div>Loading, please wait ...</div>
          ) : (
            <DrinkList
              drinks={drinks}
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