import React, { useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setcartItem] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  function addToCart(product) {
    const updateCart = [...cartItem, product];
    setcartItem(updateCart);
  }
  return (
    <>
      <div className="products-container col-md-9">
        <div className="row">
          {products.map((singleProduct) => (
            <div className="col-md-4" key={singleProduct.id}>
              <Product product={singleProduct} action={addToCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-container col-md-3">
        <Cart items={cartItem} />
      </div>
    </>
  );
};

export default Shop;
