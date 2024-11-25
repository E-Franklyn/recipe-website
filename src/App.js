import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Favorites from './Favorites';
import Popular from './Popular';
import Create from './Create';
import AboutUs from './AboutUs';
import HomePage from './HomePage';

const RecipeWebsite = () => {
    return (
        <Router basename="/recipe-website">
            <div>
                {/* ------------------------------------------ Header -------------------------------------------------- */}
                <header>
                    <div className="title">Recipe Browser System</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search recipes..." />
                    </div>
                    <div className="auth-buttons">
                        <a href="#" className="login-link">Login</a>
                        <a href="#">Signup</a>
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
                    <Route path="/popular" element={<Popular />} /> {/* Added route for Popular */}
                    <Route path="/create" element={<Create />} /> {/* Added route for Create */}
                    <Route path="/about" element={<AboutUs />} /> {/* Added route for About Us */}
                </Routes>

                {/* ------------------------------------------ Footer -------------------------------------------------- */}
                <footer>
                    {/* Follow Us Section */}
                    <div className="footer-section follow-us">
                        <h3>FOLLOW US</h3>
                        <div className="social-icons">
                            {['youtube', 'facebook', 'twitter', 'tiktok'].map((platform) => (
                                <a key={platform} href="#"><i className={`fa-brands fa-${platform}`}></i></a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Section */}
                    <div className="footer-section explore">
                        <h3>EXPLORE</h3>
                        <div className="explore-links">
                            {['Home', 'Favorites', 'Popular', 'Create', 'About Us'].map((link) => (
                                <a key={link} href="#">{link}</a>
                            ))}
                        </div>
                    </div>

                    {/* Developers Section */}
                    <div className="footer-section developers">
                        <h3>DEVELOPERS</h3>
                        {[['EF', 'SYG', 'JEL'], ['TZ', 'JZ']].map((line, lineIndex) => (
                            <div key={lineIndex} className="circles first-line">
                                {line.map((initials) => (
                                    <a key={initials} href="#" className="circle"><span>{initials}</span></a>
                                ))}
                            </div>
                        ))}
                    </div>
                </footer>
            </div >
        </Router >
    );
}

export default RecipeWebsite;
