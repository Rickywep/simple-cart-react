import React, { useState } from "react";

export default function ProductCart({ cartItem, onChangeQuantity }) {
  const { product, cantidad } = cartItem;
  const subtotal = product.price * cantidad;
  const onChangeSubtotal = (e) => {
    const quantity = parseInt(e.target.value);
    onChangeQuantity(product.id, quantity);
  };

  return (
    <div className="d-flex flex-md-row flex-column align-items-center card-cart my-2">
      <img src={product.image} alt="" className="img-fit p-5" />
      <div>
        <h5>{product.title}</h5>
        <p>
          Price:
          <span className="ms-2 badge bg-warning p-2">${product.price}</span>
        </p>
        <p>
          Cantidad:
          <select
            className="ms-2 form-select w-25 d-inline"
            onChange={onChangeSubtotal}
          >
            <option defaultValue={cantidad}>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        <p>
          Subtotal:
          <span className="ms-2 badge bg-warning p-2">${subtotal}</span>
        </p>
      </div>
    </div>
  );
}
