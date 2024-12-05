import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import { HashRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';
import { Toggle } from './components/Toggle.js';
import useLocalStorage from 'use-local-storage';
import Favorites from './Favorites';
import Popular from './Popular';
import Create from './Create';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import Recipe from './Recipe';
import recipeData from './recipedata.json';

const RecipeWebsite = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [recipeImages, setRecipeImages] = useState({});

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredRecipes([]);
            return;
        }

        const filterSegments = query.split(' ').map(segment => segment.trim());
        let filtered = [...recipeData.recipes];
        filterSegments.forEach(segment => {
        const filterMatch = segment.match(/^(\w+):\s*(.+)$/);
            
        if (filterMatch) {
            const [_, filterType, filterValue] = filterMatch;
            
            filtered = filtered.filter(recipe => {
                switch (filterType.toLowerCase()) {
                    case 'id':
                        return recipe.id == filterValue;
                    case 'ingredient':
                        const searchIngredients = filterValue.toLowerCase().split(',');
                        return searchIngredients.every(searchIngredient =>
                            recipe.ingredients.some(ingredient =>
                                ingredient.toLowerCase().includes(searchIngredient)
                            )
                        );
                    case 'description':
                        const searchDesc = filterValue.toLowerCase().split('_');
                        return searchDesc.every(searchDesc => 
                            recipe.description.toLowerCase().includes(searchDesc)
                        );
                    default:
                        return;
                }
            });
        } else {
            filtered = filtered.filter(recipe =>
                recipe.name.toLowerCase().includes(segment.toLowerCase())
            );
        }
    });

    setFilteredRecipes(filtered);
    };
    
    useEffect(() => {
        recipeData.recipes.forEach(recipe => {
            import(`./Assets/images/${recipe.id}.jpg`)
                .then(image => {
                    setRecipeImages(prev => ({
                        ...prev,
                        [recipe.id]: image.default
                    }));
                })
        });
    }, []);

    return (
        <Router>
            <div data-theme={darkMode ? "dark" : ""}>
                {/* ------------------------------------------ Header -------------------------------------------------- */}
                <header>
                    <Link to="/" className="title">Recipe Browser System</Link>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Search recipes..." 
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        {searchQuery && filteredRecipes.length > 0 && (
                            <div className="search-results">
                                {filteredRecipes.map(recipe => (
                                    <Link 
                                        key={recipe.id} 
                                        to={`/recipe/${recipe.id}`}
                                        className="search-result-item"
                                        onClick={() => setSearchQuery('')}
                                        >

                                        <img
                                            src={recipeImages[recipe.id]}
                                            alt={recipe.name}
                                            className="search-result-image"
                                        />  
                                        <div className="search-result-text">{recipe.name}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Toggle isChecked={darkMode} handleChange={() => setDarkMode(!darkMode)} />
                    <div className="auth-buttons">
                        <NavLink to="/login" className="login-link">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
                </header>

                {/* ------------------------------------------ Nav Bar -------------------------------------------------- */}
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>Favorites</NavLink></li>
                        <li><NavLink to="/popular" className={({ isActive }) => (isActive ? 'active' : '')}>Popular</NavLink></li>
                        <li><NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>Create</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
                    </ul>
                </nav>

                {/* ------------------------------------------ Routing -------------------------------------------------- */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/recipe/:pageId" element={<Recipe />} />
                </Routes>

                {/* ------------------------------------------ Footer -------------------------------------------------- */}
                <footer>
                    <div className="footer-content">
                        <div className="footer-section follow-us">
                            <h3>FOLLOW US</h3>
                            <div className="social-icons">
                                {['youtube', 'facebook', 'twitter', 'tiktok'].map((platform) => (
                                    <a key={platform} href="https://www.youtube.com/"><i className={`fa-brands fa-${platform}`}></i></a>
                                ))}
                            </div>
                        </div>

                        {/* Explore Section */}
                        <div className="footer-section explore">
                            <h3>EXPLORE</h3>
                            <div className="explore-links">
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                                <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>Favorites</NavLink>
                                <NavLink to="/popular" className={({ isActive }) => (isActive ? 'active' : '')}>Popular</NavLink>
                                <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>Create</NavLink>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
                            </div>
                        </div>

                        {/* Developers Section */}
                        <div className="footer-section developers">
                            <h3>DEVELOPERS</h3>
                            <div className="circles">
                                {['EF', 'SYG', 'JEL', 'TZ', 'JZ'].map((initials) => (
                                    <div key={initials} className="circle">{initials}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="block-container">
                        <p>&copy; {new Date().getFullYear()} Recipe Browser System. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default RecipeWebsite;
