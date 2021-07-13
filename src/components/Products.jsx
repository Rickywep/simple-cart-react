import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(data);
    console.log("~ data", data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2 className="text-center">Products</h2>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="card m-2" style={{ width: "18rem" }}>
            <div style={{ height: "20rem"}} className="overflow-hidden text-center d-flex align-items-center">
              <img src={product.image} alt="" className="img-fluid p-4" />
            </div>
            <div className="card-body text-center bg-light">
              <h5 className="card-title">{product.title.slice(0, 20)}</h5>
              <button className="btn btn-outline-success">
                <img
                  src="https://icongr.am/material/cart.svg?size=30&color=2ca049"
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
