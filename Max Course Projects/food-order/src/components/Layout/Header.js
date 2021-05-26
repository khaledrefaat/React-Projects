import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <nav className={`navbar sticky-top ${classes.header}`}>
        <div className="container fluid">
          <a href="/" className={`navbar-brand ${classes.brand}`}>
            React Meals
          </a>
          <HeaderCartButton />
        </div>
      </nav>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    </>
  );
};

export default Header;
