import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from './recipedata.json';
import './Recipe.css';

// Using require.context to import all images in the Assets folder
const images = require.context('./Assets/images', false, /\.(png|jpe?g|svg)$/);

const Recipe = () => {
    const { pageId } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (pageId) {
            const recipe = recipeData.recipes.find(r => r.id.toString() === pageId);
            if (recipe) {
                const imagePath = images(`./${pageId}.jpg`);
                setContent({
                    ...recipe,
                    image: imagePath
                });
            } else {
                setContent(null);
            }
        }
    }, [pageId]);

    if (content === null) {
        return <div>Error: Recipe not found or loading...</div>;
    }

    return (
        <div className="recipe-content">
            <h2 className="recipe-header">{content.name}</h2>
            <div className="content-r">
                <div className="reciper-image-container">
                    <img src={content.image} alt={content.name} className="recipe-image-r" />
                </div>
                <div className="recipe-ingredients">
                    <h2 className="section-header">Ingredients</h2>
                    <ul className="recipe-list">
                        {content.ingredients.map((ingredient, index) => (
                            <li key={index} className="recipe-list-item">{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="recipe-details">
                    <h2 className="section-header">Description</h2>
                    <p className="recipe-text">{content.description}</p>
                </div>
            </div>
            <div className="recipe-instructions">
                <h2 className="section-header">Instructions</h2>
                <ol className="recipe-list">
                    {content.instruction.map((step, index) => (
                        <li key={index} className="recipe-list-item">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Recipe;
