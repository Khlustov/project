import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  changeTokenActionCreator, 
  changeUserIdActionCreator, 
  getEmailFromLocalStorage, 
  getPasswordFromLocalStorage 
} from '../actions/appActions';
import { getAllPosts } from '../actions/getAllPosts';
import { changeNameActionCreator, login } from '../actions/SignInActions';

import { Navbar } from '../components';
import { ROUTES } from '../constants';
import AddPostPage from '../pages/AddPost';
import AllPostsPage from '../pages/Main';
import SignInPage from '../pages/SignIn';
import UserPosts from '../pages/UserPosts';

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
    };

   dispatch(getAllPosts());
  }, [dispatch, name, email, password, getAllPosts])

    return (
        <BrowserRouter>
          <Navbar />
          <Switch>
            
            <Route path={ROUTES.POSTS} component={UserPosts}/>
            <Route path={ROUTES.ADD} component={AddPostPage}/>
            <Route path={ROUTES.SIGNIN} component={SignInPage}/> 
            <Route path={ROUTES.MAIN} component={AllPostsPage}/>
            
          </Switch>
        </BrowserRouter>
    )
}