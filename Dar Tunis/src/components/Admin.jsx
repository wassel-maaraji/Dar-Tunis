import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://6afc97e6892984c4494bc1c5.mockapi.io/dishes";

const emptyForm = {
  "dish-name": "",
  category: "Starter",
  price: "",
  description: "",
  ingredients: "",
  image: "",
};

function Admin() {
  const [dishes, setDishes] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const getDishes = async () => {
    try {
      const res = await axios.get(API_URL);
      const data = Array.isArray(res.data) ? res.data : res.data.dishes || [];
      setDishes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      setFormData(emptyForm);
      setEditingId(null);
      getDishes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (dish) => {
    setEditingId(dish._id || dish.id);
    setFormData({
      "dish-name": dish["dish-name"] || "",
      category: dish.category || "Starter",
      price: dish.price || "",
      description: dish.description || "",
      ingredients: dish.ingredients || "",
      image: dish.image || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      if (editingId === id) {
        handleCancelEdit();
      }
      getDishes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Menu Management</h1>
        <p>Add, update, or remove dishes from Dar Tunis</p>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editingId ? "Edit Dish" : "Add New Dish"}</h2>

        <div className="admin-form-grid">
          <div className="admin-field">
            <label htmlFor="dish-name">Dish Name</label>
            <input
              id="dish-name"
              type="text"
              name="dish-name"
              value={formData["dish-name"]}
              onChange={handleChange}
              placeholder="e.g. Couscous Royal"
              required
            />
          </div>

          <div className="admin-field">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
            </select>
          </div>

          <div className="admin-field">
            <label htmlFor="price">Price (DT)</label>
            <input
              id="price"
              type="number"
              step="0.1"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. 24.5"
              required
            />
          </div>

          <div className="admin-field">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>
        </div>

        <div className="admin-field">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            id="ingredients"
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Lamb, chickpeas, carrots, harissa, olive oil"
            required
          />
        </div>

        <div className="admin-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description of the dish..."
            required
          />
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-save">
            {editingId ? "Update Dish" : "Add Dish"}
          </button>
          {editingId && (
            <button
              type="button"
              className="admin-btn-cancel"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="admin-table-wrapper">
        <h2>Current Menu ({dishes.length})</h2>

        {dishes.length === 0 ? (
          <p className="admin-status">No dishes found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dishes.map((dish) => {
                const id = dish._id || dish.id;
                return (
                  <tr key={id}>
                    <td>
                      <img
                        src={dish.image}
                        alt={dish["dish-name"]}
                        className="admin-thumb"
                      />
                    </td>
                    <td>{dish["dish-name"]}</td>
                    <td>{dish.category}</td>
                    <td>{dish.price} DT</td>
                    <td className="admin-actions-cell">
                      <button
                        type="button"
                        className="admin-btn-edit"
                        onClick={() => handleEdit(dish)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="admin-btn-delete"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Admin;