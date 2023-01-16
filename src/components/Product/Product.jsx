import React from "react";

const product = (props) => {
  return (
    <div className="card mb-4">
      <img
        src={props.product.image}
        className="card-img-top product-img p-2"
        alt={props.product.title}
        style={{ height: "200px", widows: "100%", objectFit: "contain" }}
      />
      <div className="card-body">
        <p className="card-text">
          <b>{props.product.title}</b>
        </p>
        <div className="rating-n-category">
          <small className="category">{props.product.category}</small>
          <small className="rating">{props.product.rating.rate} / 5</small>
        </div>
        <p className="descrip">{props.product.description}</p>
        <p>
          <b>${props.product.price}</b>
        </p>
        {/* <p className="card-description">{props.product.description}</p> */}
        <button
          onClick={() => props.action(props.product)}
          className="add-to-cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default product;
