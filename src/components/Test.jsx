import React, { useState } from "react";
import Modal from "./Modal";
import { DUMMY_PRODUCTS } from "../dummy-products";

const Test = ({ product }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  //   // const modalTitle = "hello";
  // const product = DUMMY_PRODUCTS.find((product) => product.id === 1);
  //   console.log(product);
  const openModal = () => {
    setIsOpenModal(true);
  };

  //   console.log(isOpenModal);
  //   return (
  //     <>
  //       <button onClick={openModal}>Add</button>

  //       {/* {isOpenModal && <Modal title={modalTitle} />} */}
  //       {isOpenModal && <Modal title={product.title} />}
  //     </>
  //   );
  // };
  // export default Test;

  // console.log(product);
  // const [isOpenModal, setIsOpenModa+l] = useState(false);
  // const openModal = () => {
  //   setIsOpenModal(true);
  // };
  return (
    <>
      <div id="div">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button id={product.id} onClick={() => openModal()}>
          Open Card
        </button>
      </div>

      {isOpenModal && <Modal product={product} />}
    </>
  );
};
export default Test;
