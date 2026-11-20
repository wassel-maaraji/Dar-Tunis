import React from "react";


function DishCard({ dish, getDishes }) {
  return (
    <div className="dish_card">
      <div className="image-wrapper">
        <img
          src={dish.image}
          alt={dish["dish-name"]}
          className="dish-image"
        />
        <span className="dish-category">{dish.category}</span>
      </div>

      <div className="dish-body">
        <div className="dish-top">
          <h3>{dish["dish-name"]}</h3>
          <span className="dish-price">{dish.price} DT</span>
        </div>

        <p className="dish-description">{dish.description}</p>

        <p className="dish-ingredients">
          <strong>Ingredients:</strong> {dish.ingredients}
        </p>

        <button className="order-btn">Order</button>
      </div>
    </div>
  );
}

export default DishCard;