import React, { useState } from 'react';
import './Favorites.css';

import i16 from './Assets/images/16.jpg';
import i17 from './Assets/images/17.jpg';
import i18 from './Assets/images/18.jpg';
import i19 from './Assets/images/19.jpg';
import i20 from './Assets/images/20.jpg';

const Favorites = () => {
    const [favorites, setFavorites] = useState([
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
    ]);

    const handleUnfavorite = (id) => {
        const element = document.getElementById(`favorite-item-${id}`);
        if (element) {
            element.classList.add('removing');
            setTimeout(() => {
                setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.id !== id));
            }, 500);
        }
    };

    return (
        <div className="Favorites">
            {favorites.map((favorite) => (
                <div key={favorite.id} id={`favorite-item-${favorite.id}`} className="favorite-item">
                    <div className="f-left-section">
                        <img src={favorite.image} alt={favorite.name} />
                    </div>
                    <div className="f-middle-section">
                        <h3>
                            <a href={`/recipe-website/#/recipe/${favorite.id}`} className="fno-style-link">
                                {favorite.name}
                            </a>
                        </h3>
                        <p>{favorite.description}</p>
                    </div>
                    <div className="f-right-section">
                        <button className="frandom-button" onClick={() => handleUnfavorite(favorite.id)}>Unfavorite</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Favorites;
