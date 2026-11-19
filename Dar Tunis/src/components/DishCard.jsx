import React from "react"
function DishCard({dish}){
    return(
        <div className="dish_card">
            <img src={dish.image} alt={dish.name} className="dish-image"/>
            <div>
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
                <p>{dish.description}DT</p>
                <button>order</button>
            </div>
        </div>
        
    )
}
export default DishCard