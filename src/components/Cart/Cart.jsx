import React from "react";

const Cart = (props) => {
  const productCost = Math.round(
    props.items.reduce((cost, items) => cost + items.price, 0)
  );
  const shipCost = Math.round(productCost * 0.1);
  const taxCost = Math.round(productCost * 0.15);

  const totalCost = productCost + shipCost + taxCost;
  return (
    <>
      <div className="cart-summary">
        Items on Cart <span>({props.items.length})</span>
      </div>

      <div className="cart-cost">
        <p>
          Product Cost:
          <span>
            <b> ${productCost}</b>
          </span>
        </p>

        <p>
          Shipping Cost:
          <span>
            <b> ${shipCost} </b>(10%)
          </span>
        </p>

        <p>
          Tax:
          <span>
            <b> ${taxCost} </b>(15%)
          </span>
        </p>
        <hr />

        <p>
          Total:
          <span>
            <b> ${totalCost}</b>
          </span>
        </p>
      </div>

      {props.items.map((item) => (
        <div className="cart-items my-2 row" key={item.id}>
          <div className="col-md-4">
            <img src={item.image} alt="" className="w-100" />
          </div>
          <div className="col-md-8">
            <p>
              <b>{item.title}</b>
            </p>
            <i>${item.price}</i>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
