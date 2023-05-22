import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);

  const clickHandler = () => {
    // console.log("clicked");
    setAddToCart((prevAddToCart) => !prevAddToCart);
  };

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={!addToCart ? "add" : "remove"} onClick={clickHandler}>
        {!addToCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
