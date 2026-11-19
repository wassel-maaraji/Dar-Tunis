import { useState } from 'react'

function AdminAddDish() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Plat ajouté : ' + name)
    setName('')
    setDescription('')
    setPrice('')
  }

  return (
    <div>
      <h2>Ajouter un plat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du plat"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AdminAddDish