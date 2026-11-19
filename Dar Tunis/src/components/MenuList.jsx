import DishCard from './DishCard'

function MenuList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p>Aucun plat disponible.</p>
  }

  return (
    <div className="menu-list">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default MenuList