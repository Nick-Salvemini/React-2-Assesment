import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddItemForm.css"

function AddItemForm({ addItem }) {
    const [formData, setFormData] = useState({
        type: 'snacks',
        name: '',
        description: '',
        recipe: '',
        serve: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ type: 'snacks', name: '', description: '', recipe: '', serve: '' });
        history.push('/')
    };

    return (
        <form onSubmit={handleSubmit} className="addItemForm">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange}>
                <option value="snacks">Snack</option>
                <option value="drinks">Drink</option>
            </select>

            <label htmlFor="name">Name:</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="description">Description:</label>
            <input id="description" name="description" value={formData.description} onChange={handleChange} />

            <label htmlFor="recipe">Recipe:</label>
            <input id="recipe" name="recipe" value={formData.recipe} onChange={handleChange} />

            <label htmlFor="serve">Serve:</label>
            <input id="serve" name="serve" value={formData.serve} onChange={handleChange} />

            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddItemForm;