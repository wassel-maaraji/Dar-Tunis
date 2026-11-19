function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p className="category">{dish.category}</p>
      <p className="description">{dish.description}</p>
      <p className="ingredients">{dish.ingredients}</p>
      <p className="price">{dish.price} DT</p>
    </div>
  )
}

export default DishCard