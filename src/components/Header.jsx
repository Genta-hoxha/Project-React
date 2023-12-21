import React from "react";
import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  const cartQuantity = cart.items.length;

  function openCard() {
    modal.current.open();
  }
  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }
  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="container">
        <img src="logo.png" id="icon" alt="Logo" />
        <h1 id="text">Pet House </h1>
        {/* <button onClick={openCard} id="buttonCart">
          Cart
        </button> */}
        <form>
          <input type="text" name="search" placeholder="Search.." />
          <img src="search.png" alt="buttonpng" id="logosearch" />
        </form>
        <p>
          <button id="logobutton" onClick={openCard}>
            {cartQuantity}
            <img src="homelogo.png" alt="buttonpng" border="0" id="logo" />
          </button>
        </p>
      </header>
    </>
  );
}
