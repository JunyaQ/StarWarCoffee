import React from 'react';
const CategoryList = ({catdata, title }) => {
  if (!catdata.length) {
    return <h3>No Category</h3>;
  }

  return (
    <div>
      <h3>Hellllllo</h3>
      {catdata &&
        catdata.map((categories) => (
          <div key={categories.id} className="card mb-3">
            <p className="card-header">
              hello
              {categories.catname} 
            </p>
            {/* <div className="card-body">
              <p>{category.thoughtText}</p>
              <p className="mb-0">
                Reactions: {category.reactionCount} || Click to{' '}
                {category.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div> */}
          </div>
        ))}
    </div>
  );
};

export default CategoryList;
