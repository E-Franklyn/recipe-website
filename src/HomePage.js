import React from 'react';
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
                    {[r1, r2, r3, r4, r5].map((reviewImage, index) => (
                        <div className="review-item" key={index}>
                            <div className="review-container">
                                <img src={reviewImage} alt={`Customer ${index + 1}`} className="profile-pic" />
                                <div className="review-details">
                                    <div className="review-header">
                                        <span className="customer-name">Customer {index + 1}</span>
                                        <span className="star-rating">⭐⭐⭐⭐⭐</span>
                                    </div>
                                    <p>Sample review text for customer {index + 1}.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default HomePage;
