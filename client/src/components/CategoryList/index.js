import React from 'react';

const CategoryList = ({ categories, title }) => {
  if (!categories.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {categories &&
        categories.map(category => (
          <div key={category.id} className="card mb-3">
            <p className="card-header">
              {category.catname}
            </p>
            <div className="card-body">
              <p>{category.subcatname}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;