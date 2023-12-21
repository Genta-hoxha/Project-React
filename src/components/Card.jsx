import React from "react";

export default function Card({
  id,
  image,
  title,
  price,
  description,
  addToCart,
}) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div id="card">
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
          <button id="cart" onClick={() => addToCart(id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
// };
