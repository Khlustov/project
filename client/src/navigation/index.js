import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  changeTokenActionCreator, 
  changeUserIdActionCreator, 
  getEmailFromLocalStorage, 
  getPasswordFromLocalStorage 
} from '../actions/appActions';
import { changeNameActionCreator, login } from '../actions/SignInActions';

import { Navbar } from '../components'
import { ROUTES } from '../constants'
import SignInPage from '../pages/SignIn'

export const Navigator = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name)
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
  
    if(data && data.token) {
      dispatch(changeTokenActionCreator(data.token));
      dispatch(changeUserIdActionCreator(data.id));
      dispatch(changeNameActionCreator(data.name));
      dispatch(getEmailFromLocalStorage(data.email));
      dispatch(getPasswordFromLocalStorage(data.password));
      dispatch(login(name, email, password))
    }
  }, [dispatch, name, email, password])

    return (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={ROUTES.SIGNIN} component={SignInPage}/>
          </Switch>
        </BrowserRouter>
    )
}