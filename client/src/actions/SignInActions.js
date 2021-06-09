import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';


export const changeNameActionCreator = (payload) => {
  return {
      type: actionTypes.CHANGE_NAME,
      payload
  }
}

export const changeEmailActionCreator = (payload) => {
  return {
    type: actionTypes.CHANGE_EMAIL,
    payload
  }
}

export const changePasswordActionCreator = (payload) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload
  }
}

export const register = (name, email, password) => {
  return async (dispatch) => {

    dispatch({
      type: actionTypes.REGISTER_START
    });

    try {
            
      const response = await axios.post('/api/auth/registration', {
        name, email, password,
      });
       
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: response.config.data
      })

      toast.success(`${response.data.message}`, {
        backgroundColor: "#323131",
        color: "#ffffff"
      })
    }

    catch (error) {
      toast.error(`${error.response.data.message}`, {
        backgroundColor: "#323131",
        color: "#ffffff"
      })
      
      dispatch({
        type: actionTypes.REGISTER_FAILURE,
        payload: error.response
      })
    }
  }
}

export const login = (name, email, password) => {
  
  return async (dispatch) => {
    
    dispatch({
      type: actionTypes.LOGIN_START
    });

    try {
            
      const response = await axios.post('/api/auth/login', {
        name, email, password,
      });
       
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response
      });      

      localStorage.setItem('userData', JSON.stringify({
        token: response.data.token, 
        id: response.data.userId,
        name: response.data.name,
        email: response.data.email,
        password: response.data.password
      }))

      toast.success(`Добро пожаловать, ${response.data.name}`, {
        backgroundColor: "#323131",
        color: "#ffffff"
      })
    }

    catch (error) {

      toast.error(`${error.response.data.message}`, {
        backgroundColor: "#323131",
        color: "#ffffff"
      })
      
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: error.response.data.message
      })
    }

  }
}

