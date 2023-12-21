import React from "react";
import Card from "./Card";
import { DUMMY_PRODUCTS } from "../dummy-products";
const Shop = ({ onAddItemToCart }) => {
  return (
    <section id="shop">
      <h2></h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Card {...product} addToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Shop;
