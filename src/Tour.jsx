import React, { useState } from "react";

const Tour = ({ id, info, image, name, price, removeTours }) => {
  const [click, setClick] = useState(false);

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {click ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click ? "See Less" : "See More"}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        type="button"
        onClick={() => removeTours(id)}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
