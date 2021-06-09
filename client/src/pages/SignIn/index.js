import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  changeEmailActionCreator, 
  changeNameActionCreator,
  changePasswordActionCreator,
  register,
  login
} from '../../actions/SignInActions';
import { clearState } from '../../actions/clearState'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { ROUTES } from '../../constants'

import './style.css'

const SignInPage = () => {

  const dispatch = useDispatch();

  const name = useSelector(state => state.name);
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const userData = useSelector(state => state.userData);
  
  const onChangeName = useCallback((event) => {
    dispatch(changeNameActionCreator(event.target.value));
  }, [dispatch]);

  const onChangeEmail = useCallback((event) => {
    dispatch(changeEmailActionCreator(event.target.value));
  }, [dispatch]);

  const onChangePassword = useCallback((event) => {
    dispatch(changePasswordActionCreator(event.target.value));
  }, [dispatch]);

  const onCloseModal = useCallback(() => {
    dispatch(clearState())
  }, [dispatch]);

  const registration = useCallback(() => {
    dispatch(register(name, email, password));
  }, [dispatch, name, email, password]);

  const signIn = useCallback(() => {
    dispatch(login(name, email, password))
  }, [dispatch, name, email, password]);

  
  
  return (
      <div className="sign-in-page">
        <div className="sign-in-modal">
          <Link to={ROUTES.MAIN}>
            <button 
              className="sign-in-closemodal"
              onClick={onCloseModal}
            >
              X
            </button>
          </Link>  
          <form className="login-form">
              <input
                className="login-form-input"
                type="text"
                placeholder="Имя пользователя"
                value={name}
                onChange={onChangeName}
              />
              <input
                className="login-form-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              />
              <input
                className="login-form-input"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={onChangePassword}
              />
          </form>
          <div className="login-form-buttons">
              <button 
              className="login-form-button"
              onClick={registration}
              >
              Регистрация
              </button>
              <button 
              className="login-form-button"
              onClick={signIn}
              >
              Вход
              </button>
          </div>
        </div> 
        {userData !== null && <Redirect to={ROUTES.MAIN} />} 
      </div>   
      
      
  )
}

export default SignInPage