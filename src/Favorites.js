import React, { useState, useEffect } from 'react';
import './Favorites.css';

import i16 from './Assets/images/16.jpg';
import i17 from './Assets/images/17.jpg';
import i18 from './Assets/images/18.jpg';
import i19 from './Assets/images/19.jpg';
import i20 from './Assets/images/20.jpg';

const initialFavorites = [
    {
        id: 16,
        image: i16,
        name: 'Curried Beef Stew',
        description: 'A beef stew recipe that an individual created in memories of their mother back in Japan.',
    },
    {
        id: 17,
        image: i17,
        name: 'Poteca Nut Roll',
        description: 'A passed down recipe from Yugoslavia for a nice nut roll.',
    },
    {
        id: 18,
        image: i18,
        name: 'Beef Paprikash with Fire-Roasted Tomatoes',
        description: 'A Hungarian dish.',
    },
    {
        id: 19,
        image: i19,
        name: 'Shortbread',
        description: 'A simple recipe that comes from New Zealand.',
    },
    {
        id: 20,
        image: i20,
        name: 'Thai Chicken Thighs',
        description: 'Tender and moist chicken thighs with peanut butter sauce.',
    }
];

const Favorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites && storedFavorites.length > 0) {
            return storedFavorites;
        }
        localStorage.setItem('favorites', JSON.stringify(initialFavorites));
        return initialFavorites;
    });

    useEffect(() => {
        // Save the updated favorites list to localStorage whenever it changes
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleUnfavorite = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(updatedFavorites);
    };

    return (
        <div className="Favorites">
            {favorites.length > 0 ? (
                favorites.map((favorite) => (
                    <div key={favorite.id} className="favorite-item">
                        <div className="f-left-section">
                            <img src={favorite.image} alt={favorite.name} />
                        </div>
                        <div className="f-middle-section">
                            <h3>{favorite.name}</h3>
                            <p>{favorite.description}</p>
                        </div>
                        <div className="f-right-section">
                            <button
                                className="frandom-button"
                                onClick={() => handleUnfavorite(favorite.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No favorites added yet!</p>
            )}
        </div>
    );
};

export default Favorites;
