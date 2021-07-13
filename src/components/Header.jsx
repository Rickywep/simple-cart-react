import React from "react";

export default function Header() {
  return (
    <nav className="nav bg-dark">
      <a className="nav-link active" aria-current="page" href="#">
        Tiendita
      </a>
      <a className="nav-link" href="#">
        cart
      </a>
    </nav>
  );
}
