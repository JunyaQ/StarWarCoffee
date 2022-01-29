import { useQuery } from "@apollo/client";
import React from "react";
import {QUERY_CATEGORIES} from "../utils/queries";


const Category = () => {
  const { data, loading, error } = useQuery(QUERY_CATEGORIES);
  

  if (loading) return "Loading categories...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>Coffe Menu</h1>
      <div>
        {data.categories.map((category) => (
          <li key={category.id}>{category.catname}
          <p>{category.subcatname}</p>
          </li>
        ))}
      </div>

      <div>

      </div>

    </div>
  );
}

export default Category;