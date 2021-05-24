import React from 'react';
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './style.css';

const Navbar = () => {

  const userData = useSelector(state => state.userData);
  const name = useSelector(state => state.name);

  return (
    <div className="navbar">
        <Link className="link" to={ROUTES.MAIN}>
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
        </Link>
        <div className="navbar-buttons">
          <button className="navbar-button navbar-button__add">разместить объявление</button>
          {userData ? (
            <div className="navbar-user">{name}</div>
          ) : (
            <Link className="link" to={ROUTES.SIGNIN}>
            <button className="navbar-button navbar-button__signin">войти</button>
          </Link>
          )}                    
        </div>
    </div>
  )
}

export {Navbar}