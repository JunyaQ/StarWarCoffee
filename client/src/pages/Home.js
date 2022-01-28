import React from 'react';
import CategoryList from '../components/CategoryList';

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryList
              thoughts={categories}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
