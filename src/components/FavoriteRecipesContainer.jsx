/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipeContainer({ recipe, index }) {
  const {
    id,
    image,
    name,
    type,
    nationality,
    alcoholicOrNot,
    category,
  } = recipe;

  const [isCopied, setIsCopied] = useState(false);

  // esse array é só pra servir como mock
  const localStorageValue = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  const handleShare = (location) => {
    navigator.clipboard.writeText(`http://localhost:3000${location}`);
    setIsCopied(true);
  };

  const handleFavorite = ({ target }) => {
    const newLocalStorageValue = (
      localStorageValue.filter((recipes) => recipes.id !== target.id)
    );

    console.log(newLocalStorageValue);
  };

  return (
    <div>
      <Link to={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          className="cardImage"
        />
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {type === 'food' ? nationality : alcoholicOrNot}
        {' '}
        -
        {' '}
        {category}
      </p>
      <button
        type="button"
        onClick={ () => handleShare(type === 'food' ? `/foods/${id}` : `/drinks/${id}`) }
      >
        <img
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share"
        />
      </button>
      <button type="button" onClick={ handleFavorite }>
        <img
          src={ favoriteIcon }
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="favorite"
          id={ id }
        />
      </button>
      {
        isCopied && <p>Link copied!</p>
      }
    </div>
  );
}