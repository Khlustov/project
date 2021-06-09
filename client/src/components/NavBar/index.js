import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { clearState } from '../../actions/clearState';

import './style.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData);
  const name = useSelector(state => state.name);  

  const exitFromProfile = useCallback(() => {
    dispatch(clearState());
    localStorage.removeItem('userData')
  }, [dispatch]);  

  return (
    <div className="navbar">
        <Link className="link-main" to={ROUTES.MAIN}>
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
        </Link>
        <div className="navbar-buttons">
          {userData ? (
            <>
            <div className="navbar-user">{name}</div>
            <Link className="link" to={ROUTES.POSTS}>
              Мои объявления              
            </Link>            
            <Link className="link" to={ROUTES.ADD}>
              Добавить объявление
            </Link>
            <Link className="link" onClick={exitFromProfile}>
              Выйти
            </Link>
            </>
          ) : (
            <Link className="link" to={ROUTES.SIGNIN}>                        
            Войти
            </Link>
          )}                    
        </div>
    </div>
  )
}

export {Navbar}