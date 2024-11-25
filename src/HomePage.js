import React from 'react';
import './HomePage.css';

import r1 from './Assets/Reviews/1.jpg';
import r2 from './Assets/Reviews/2.jpg';
import r3 from './Assets/Reviews/3.jpg';
import r4 from './Assets/Reviews/4.jpg';
import r5 from './Assets/Reviews/5.jpg';

const HomePage = () => {
    return (

        <main className="content">
            {/* -------------------------------------- Main Content ------------------------------------------------ */}
            <div className="top-sections">
                <div className="section daily-special">
                    <a href="link_to_daily_special" className="button">Daily Special</a>
                    <img src="placeholder-image.jpg" alt="Daily Special" className="daily-special-image" />
                </div>
                <div className="section trending">
                    <h2>Trending</h2>
                    {[1, 2, 3, 4].map((i) => (
                        <div className="trending-item" key={i}>
                            <img src="placeholder-image.jpg" alt={`Trending Recipe ${i}`} />
                            <p>Recipe {i}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section random-recipe">
                <button className="random-button">Random Recipe</button>
                <div className="random-recipe-content">
                    <div className="random-recipe-image">
                        <img src="placeholder-image.jpg" alt="Random Recipe" />
                    </div>
                    <div className="random-recipe-text">
                        <p>Sample text</p>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------ Customer Reviews -------------------------------------------- */}
            <div className="section customer-reviews">
                <h2 className="reviews-title">Customer Reviews</h2>
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
