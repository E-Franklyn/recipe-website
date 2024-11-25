import React, { useEffect, useState } from 'react';
import './Popular.css';

const Popular = () => {
    const topTenRecipes = [
        { rank: 1, name: "Irish Spiced Beef", likes: 2172 },
        { rank: 2, name: "Scottish Oatmeal Rolls", likes: 1973 },
        { rank: 3, name: "Almond Tea Bread", likes: 1864 },
        { rank: 4, name: "English Rhubarb Crumble", likes: 1458 },
        { rank: 5, name: "Crispy Fish & Chips", likes: 1302 },
        { rank: 6, name: "Potato Dumplings", likes: 1280 },
        { rank: 7, name: "Apfelkuchen", likes: 1190 },
        { rank: 8, name: "Hazelnut French Macarons", likes: 1159 },
        { rank: 9, name: "Finnish Salmon and Dill Pie", likes: 1145 },
        { rank: 10, name: "Shrimp Mozambique", likes: 940 },
    ];

    const maxLikes = Math.max(...topTenRecipes.map(recipe => recipe.likes));

    const getRankColor = (rank) => {
        const colors = [
            "#352084",
            "#2e247a",
            "#2e2d7c",
            "#2c2e81",
            "#2c367b",
            "#283c76",
            "#254472",
            "#214970",
            "#194c68",
            "#1c5e66"
        ];
        return colors[rank - 1];
    };

    const barColors = [
        "#5832d5", // Rank 1
        "#523fcf", // Rank 2
        "#4f4aca", // Rank 3
        "#4856c3", // Rank 4
        "#4362bd", // Rank 5
        "#3d6db7", // Rank 6
        "#3879b3", // Rank 7
        "#3285ad", // Rank 8
        "#2d90a7", // Rank 9
        "#299ca1"  // Rank 10
    ];

    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateBars(true);
        }, 100); // Delay to ensure initial render

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="top-recipes-container">
            <h1>Top 10 Recipes!</h1>
            <table className="top-recipes-table">
                <thead>
                    <tr>
                        <th className="recipe-name">Recipe Name</th>
                        <th className="rank">Rank</th>
                        <th className="likes">Likes ❤️</th>
                    </tr>
                </thead>
                <tbody>
                    {topTenRecipes.map((recipe) => (
                        <tr key={recipe.rank} className="table-row">
                            <td className="recipe-name">{recipe.name}</td>
                            <td className="rank">
                                <div className="rank-box" style={{ backgroundColor: getRankColor(recipe.rank) }}>
                                    <span className="rank-number">{recipe.rank}</span>
                                </div>
                            </td>
                            <td className="likes">
                                <div className="bar-wrapper">
                                    <div
                                        className={`bar ${!animateBars ? 'initial' : ''}`}
                                        style={{
                                            width: animateBars ? `${(recipe.likes / maxLikes) * 100}%` : '10%',
                                            backgroundColor: barColors[recipe.rank - 1]
                                        }}
                                    >
                                        <span className="likes-label">{recipe.likes} ❤️</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Popular;
