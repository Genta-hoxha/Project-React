import { useState } from "react";
import React from "react";
import Header from "./src/components/Header";
import Shop from "./src/components/Shop";
import { DUMMY_PRODUCTS } from "./src/dummy-products";
import Test from "./src/components/Test";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const openModal = (id) => {
  //   console.log(id);

  //   setIsOpenModal(true);
  // };

  // function handleAddItemToCart(id) {
  //   setShoppingCart((prevShoppingCart) => {
  //     const updatedItems = [...prevShoppingCart.items];

  //     const existingCartItemIndex = updatedItems.findIndex(
  //       (cartItem) => cartItem.id === id
  //     );
  //     const existingCartItem = updatedItems[existingCartItemIndex];

  //     if (existingCartItem) {
  //       const updatedItem = {
  //         ...existingCartItem,
  //         quantity: existingCartItem.quantity + 1,
  //       };
  //       updatedItems[existingCartItemIndex] = updatedItem;
  //     } else {
  //       const product = DUMMY_PRODUCTS.find((product) => product.id === id);
  //       updatedItems.push({
  //         id: id,
  //         name: product.title,
  //         price: product.price,
  //         quantity: 1,
  //       });
  //     }
  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }
  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      console.log(updatedItems);
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        console.log(updatedItems);
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        console.log(product);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      handleUpdateCartItemQuantity(id, 1);

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }
  return (
    <>
      {/* <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart} /> */}

      {DUMMY_PRODUCTS.map((product) => (
        <Test
          // openModal={openModal}
          // isOpenModal={isOpenModal}
          product={product}
        />
      ))}
    </>
  );
}

export default App;
