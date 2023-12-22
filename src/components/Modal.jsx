import React from "react";

const Modal = ({ product }) => {
  //   console.log(product);
  return (
    <center>
      <div id="div1">
        {/* <p>{product.id}</p> */}
        <h2>{product.title}</h2>
        <center>
          {" "}
          <img src={product.image} />
        </center>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </center>
  );
};
export default Modal;
