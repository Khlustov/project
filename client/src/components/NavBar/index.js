import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { clearState } from '../../actions/clearState';
import { getUserPosts } from '../../actions/getUserPosts';

import './style.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData);
  const name = useSelector(state => state.name);
  const email = useSelector(state => state.email);

  const exitFromProfile = useCallback(() => {
    dispatch(clearState());
    localStorage.removeItem('userData')
  }, [dispatch]);

  const getPosts = useCallback(() => {
    dispatch(getUserPosts(email))
    console.log("nav", email);
  }, [dispatch, email])
  

  return (
    <div className="navbar">
        <Link className="link" to={ROUTES.MAIN}>
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
        </Link>
        <div className="navbar-buttons">
          {userData ? (
            <>
            <div className="navbar-user">{name}</div>
            <Link className="link" to={ROUTES.POSTS}>
              <button onClick={getPosts}>Мои объявления</button>
            </Link>            
            <Link className="link" to={ROUTES.ADD}>
              <button>Добавить объявление</button>
            </Link>
            <button onClick={exitFromProfile}>Выйти</button>
            </>
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