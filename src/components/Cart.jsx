import React from "react";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";

export default function Cart({ cart, setCart }) {
  function onChangeQuantity(id, quantity) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.product.id === id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    setCart(updatedCart);
  }

  let total = cart.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <h2>No tienes productos en tu carrito</h2>
        <Link to="/" className="btn btn-success mt-3">
          volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h2 className="text-center my-5">Tu carrito</h2>
      <div className="row">
        <div className="products-cards col-12 col-md-8">
          {cart.map((cartItem) => (
            <ProductCart
              key={cartItem.product.id}
              cartItem={cartItem}
              onChangeQuantity={onChangeQuantity}
            />
          ))}
        </div>
        <div className="col-12 col-md-4">
          <div className="bg-light p-2 my-3">
            <h6>Total:</h6>
            <p>{total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
