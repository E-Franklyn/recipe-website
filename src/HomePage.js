import React, { useState, useEffect } from 'react';
import './HomePage.css';

import r1 from './Assets/Reviews/1.jpg';
import r2 from './Assets/Reviews/2.jpg';
import r3 from './Assets/Reviews/3.jpg';
import r4 from './Assets/Reviews/4.jpg';
import r5 from './Assets/Reviews/5.jpg';

import i1 from './Assets/images/1.jpg';
import i2 from './Assets/images/2.jpg';
import i3 from './Assets/images/3.jpg';
import i4 from './Assets/images/4.jpg';
import i5 from './Assets/images/5.jpg';
import i6 from './Assets/images/6.jpg';
import i7 from './Assets/images/7.jpg';
import i8 from './Assets/images/8.jpg';
import i9 from './Assets/images/9.jpg';
import i10 from './Assets/images/10.jpg';
import i11 from './Assets/images/11.jpg';
import i12 from './Assets/images/12.jpg';
import i13 from './Assets/images/13.jpg';
import i14 from './Assets/images/14.jpg';
import i15 from './Assets/images/15.jpg';
import i16 from './Assets/images/16.jpg';
import i17 from './Assets/images/17.jpg';
import i18 from './Assets/images/18.jpg';
import i19 from './Assets/images/19.jpg';
import i20 from './Assets/images/20.jpg';

import recipeData from './recipedata.json';

const trendingItems = [
    { name: 'Patatas Bravas', imageSrc: i12 },
    { name: 'Caramel Apple Strudel', imageSrc: i13 },
    { name: 'Austrian Walnut Cookies', imageSrc: i14 },
    { name: 'Chicken Yakitori', imageSrc: i15 },
];

const HomePage = () => {
    const [dailySpecial, setDailySpecial] = useState(null);
    const [randomRecipe, setRandomRecipe] = useState({
        image: '',
        name: '',
        description: '',
        ingredients: [],
        instruction: []
    });
    const [showRecipeDetails, setShowRecipeDetails] = useState(false);

    useEffect(() => {
        const recipe = recipeData.recipes.find(item => item.id === 11);
        setDailySpecial(recipe);
    }, []);

    const handleRandomRecipe = () => {
        const randomId = Math.floor(Math.random() * 20) + 1;
        import(`./Assets/images/${randomId}.jpg`)
            .then((image) => {
                const recipe = recipeData.recipes.find(item => item.id === randomId);
                if (recipe) {
                    setRandomRecipe({
                        image: image.default,
                        name: recipe.name,
                        description: recipe.description || '',
                        ingredients: recipe.ingredients || [],
                        instruction: recipe.instruction || [],
                    });
                    setShowRecipeDetails(true);
                } else {
                    setRandomRecipe({
                        image: '',
                        name: 'Recipe not found',
                        description: '',
                        ingredients: [],
                        instructions: []
                    });
                }
            })
            .catch((error) => {
                console.error('Error loading image:', error);
                setRandomRecipe({
                    image: '',
                    name: 'Image not found',
                    description: '',
                    ingredients: [],
                    instructions: []
                });
            });
    };

    return (
        <main className="content">
            {/* -------------------------------------- Main Content ------------------------------------------------ */}
            <div className="top-sections">
                <div className="section daily-special">
                    <a href="/recipe-website/#/recipe/11" className="button">
                        Daily Special - {dailySpecial ? ` ${dailySpecial.name}` : ''}
                    </a>
                    <img src={i11} alt="Daily Special" className="daily-special-image" />
                </div>
                <div className="section trending">
                    <h2 className="trending-title">Trending</h2>
                    {trendingItems.map((item, index) => (
                        <div className="trending-item" key={index}>
                            <img src={item.imageSrc} alt={`Trending Recipe ${item.name}`} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section random-recipe">
                <button className="random-button" onClick={handleRandomRecipe}>Random Recipe</button>
                <div className="random-recipe-content">
                    <div className="random-recipe-image">
                        {randomRecipe.image && (
                            <img src={randomRecipe.image} alt="Random Recipe" className="recipe-image" />
                        )}
                    </div>
                    <div className="random-recipe-text">
                        <div className="random-recipe-block">
                            {showRecipeDetails && (
                                <>
                                    <p className="random-padding name-text">Name: {randomRecipe.name}</p>
                                    <p className="random-padding">Description: {randomRecipe.description}</p>
                                    <p className="random-padding">Ingredients: {randomRecipe.ingredients.join(', ')}</p>
                                    <p className="random-padding">Instructions: {randomRecipe.instruction.join('. ')}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------ Customer Reviews -------------------------------------------- */}
            <div className="section customer-reviews">
                <h2 className="reviews-title customer-review-text">Customer Reviews</h2>
                <div className="customer-reviews-content">
                    <div className="review-item">
                        <div className="review-container">
                            <img src={r1} alt="Customer Alice" className="profile-pic" />
                            <div className="review-details">
                                <div className="review-header">
                                    <span className="customer-name">Dudley Bernhard</span>
                                    <span className="star-rating">⭐⭐⭐⭐⭐</span>
                                </div>
                                <p>Great recipes would recommend!</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-container">
                            <img src={r2} alt="Customer Bob" className="profile-pic" />
                            <div className="review-details">
                                <div className="review-header">
                                    <span className="customer-name">Emily Kozey</span>
                                    <span className="star-rating">⭐⭐⭐⭐</span>
                                </div>
                                <p>Absolutely love these dishes!</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-container">
                            <img src={r3} alt="Customer Charlie" className="profile-pic" />
                            <div className="review-details">
                                <div className="review-header">
                                    <span className="customer-name">Keyshawn Harber</span>
                                    <span className="star-rating">⭐⭐⭐⭐⭐</span>
                                </div>
                                <p>Fantastic experience, will try again.</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-container">
                            <img src={r4} alt="Diana" className="profile-pic" />
                            <div className="review-details">
                                <div className="review-header">
                                    <span className="customer-name">Jimmy Witting</span>
                                    <span className="star-rating">⭐⭐⭐</span>
                                </div>
                                <p>Delicious food and easy instructions!</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="review-container">
                            <img src={r5} alt="Ethan" className="profile-pic" />
                            <div className="review-details">
                                <div className="review-header">
                                    <span className="customer-name">Jonathon Tremblay</span>
                                    <span className="star-rating">⭐⭐⭐⭐</span>
                                </div>
                                <p>Highly satisfied with the quality!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
