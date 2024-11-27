import React, { useState } from 'react';
import './Create.css';
import image1 from './Assets/Create/1.jpg';
import image2 from './Assets/Create/2.jpg';

const Create = () => {
    const [recipes, setRecipes] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        instructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipes([...recipes, formData]);
        setFormData({ title: '', description: '', ingredients: '', instructions: '' });
    };

    return (
        <div className="create-recipe-container">
            <h2>Create a Recipe</h2>
            <div className="image-wrapper">
                <img src={image1} alt="idk1" className="side-image" />
                <form className="recipe-form" onSubmit={handleSubmit}>
                    
                    <label>
                        Recipe Name:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            required
                        />
                    </label>
                    <label>
                        Ingredients:
                        <textarea
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            rows="5"
                            required
                        />
                    </label>
                    <label>
                        Instructions:
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            rows="8"
                            required
                        />
                    </label>
                    <button type="submit">Submit Recipe</button>
                </form>
                <img src={image2} alt="idk2" className="side-image" />
            </div>

            <div className="recipe-output">
                <h3>Submitted Recipes</h3>
                <ul>
                    {recipes.map((recipe, index) => (
                        <li key={index}>
                            <h4>{recipe.title}</h4>
                            <p><strong>Description:</strong> {recipe.description}</p>
                            <p><strong>Ingredients:</strong> {recipe.ingredients.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Create;
