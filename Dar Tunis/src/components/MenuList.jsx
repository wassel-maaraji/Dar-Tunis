import React, { useState, useEffect } from "react";
import axios from "axios";
import DishCard from "./DishCard";
function MenuList() {
  const [dishes, setDishes] = useState([]);

  const getDIshes = async () => {
    try {
      const res = await axios.get(
        "https://6afc97e6892984c4494bc1c5.mockapi.io/dishes",
      );
      console.log(res.data)
      setDishes(res.data);
    } catch (error) {
      console.log(error, "error from fetching dishes");
    }
  };
  useEffect(() => {
    getDIshes();
  }, []);
  return (
    <div>
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} getDIshes={getDIshes}/>
        ))}
      </div>
    </div>
  );
}
export default MenuList;
