import React, { useState } from 'react';
import './App.css';
import './index.css';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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

const RecipeWebsite = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    return (
        <Router>
            <div data-theme={darkMode ? "dark" : ""}>
                {/* ------------------------------------------ Header -------------------------------------------------- */}
                <header>
                    <div className="title">Recipe Browser System</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search recipes..." />
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
