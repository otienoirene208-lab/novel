import React from "react";

const Categories = () => {

  const categories = [
    "Romance",
    "Mystery",
    "Fantasy",
    "Adventure",
    "Science Fiction",
    "Biography"
  ];

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Novel Categories
      </h1>

      <div className="row">

        {categories.map((category, index) => (
          <div className="col-md-4 mb-3" key={index}>

            <div className="card shadow p-3 text-center">

              <h4>
                📚 {category}
              </h4>

              <button className="btn btn-warning">
                View Books
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Categories;