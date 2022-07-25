import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div>
      <Header page="profile" />
      <div>
        <p data-testid="profile-email">{email}</p>
        <Link to="/done-recipes" data-testid="profile-done-btn">
          Done Recipes
        </Link>
        <Link to="/favorite-recipes" data-testid="profile-favorite-btn">
          Favorite Recipes
        </Link>
        <Link to="/" data-testid="profile-logout-btn">
          <button
            type="button"
            onClick={ handleLogout }
          >
            Logout
          </button>
        </Link>
      </div>
      <Footer />
    </div>);
}

export default Profile;
