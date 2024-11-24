import React from 'react';
import './App.css';

const RecipeWebsite = () => {
    return (
        <div>
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

            <nav>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>

            <main className="content">
                <div className="section daily-special">
                    <a href="link_to_daily_special" className="button">Daily Special</a>
                    <img src="placeholder-image.jpg" alt="Daily Special" className="daily-special-image" />
                </div>
                <div className="section trending">
                    <h2>Trending</h2>
                    <div className="trending-item">
                        <img src="placeholder-image.jpg" alt="Trending Recipe 1" />
                        <p>Recipe 1</p>
                    </div>
                    <div className="trending-item">
                        <img src="placeholder-image.jpg" alt="Trending Recipe 2" />
                        <p>Recipe 2</p>
                    </div>
                    <div className="trending-item">
                        <img src="placeholder-image.jpg" alt="Trending Recipe 3" />
                        <p>Recipe 3</p>
                    </div>
                    <div className="trending-item">
                        <img src="placeholder-image.jpg" alt="Trending Recipe 4" />
                        <p>Recipe 4</p>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-section follow-us">
                    <h3>FOLLOW US</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>

                <div className="footer-section explore">
                    <h3>EXPLORE</h3>
                    <div className="explore-links">
                        <div className="first-line">
                            <a href="#">Home</a>
                            <a href="#">Favorites</a>
                            <a href="#">Popular</a>
                        </div>
                        <div className="second-line">
                            <a href="#">Create</a>
                            <a href="#">About Us</a>
                        </div>
                    </div>
                </div>

                <div className="footer-section developers">
                    <h3>DEVELOPERS</h3>
                    <div className="circles">
                        <div className="first-line">
                            <a href="#" className="circle"><span>EF</span></a>
                            <a href="#" className="circle"><span>SYG</span></a>
                            <a href="#" className="circle"><span>JEL</span></a>
                        </div>
                        <div className="second-line">
                            <a href="#" className="circle"><span>TZ</span></a>
                            <a href="#" className="circle"><span>JZ</span></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RecipeWebsite;
