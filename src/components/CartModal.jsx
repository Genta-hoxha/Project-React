import { forwardRef, useImperativeHandle, useRef } from "react";
import React from "react";
import { createPortal } from "react-dom";
import MyCart from "./MyCart";

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <MyCart
        items={cartItems}
        onUpdateItemQuantity={onUpdateCartItemQuantity}
      />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
