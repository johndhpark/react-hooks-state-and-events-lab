import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const changeHandler = (e) => {
    // console.log("changed");
    const { value } = e.target;

    setSelectedCategory(value);
  };

  const filterList = () => {
    if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    return items.map(({ id, name, category }) => (
      <Item key={id} name={name} category={category} />
    ));
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{filterList()}</ul>
    </div>
  );
}

export default ShoppingList;
