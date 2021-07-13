import React, { useEffect, useState } from "react";

export default function Product({ product, cart, setCart }) {
  const [inCart, setInCart] = useState(false);

  function checkProduct() {
    const inCart = cart.find(
      (productCart) => productCart.product.id === product.id
    );
    if (inCart) {
      setInCart(true);
    }
  }
  useEffect(() => {
    checkProduct();
  }, [cart]);

  return (
    <div className="card m-2">
      <img src={product.image} alt="" className="img-fit p-4" />
      <div className="card-body text-center">
        <h5 className="card-title">{product.title.slice(0, 20)}</h5>
        <button
          disabled={inCart && true}
          className={
            inCart
              ? "btn btn-secondary"
              : "btn border-success btn-cart pulsating-circle"
          }
          onClick={() =>
            setCart((cart) => cart.concat({ product, cantidad: 1 }))
          }
        >
          {inCart ? (
            "En el carrito"
          ) : (
            <img
              src="https://icongr.am/material/cart.svg?size=30&color=2ca049"
              alt=""
            />
          )}
        </button>
      </div>
    </div>
  );
}
