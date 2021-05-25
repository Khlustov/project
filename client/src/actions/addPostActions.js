import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';

export const changePostTitle = (payload) => {
    return {
        type: actionTypes.CHANGE_POST_TITLE,
        payload
    }
}

export const changePostPrice = (payload) => {
    return {
        type: actionTypes.CHANGE_POST_PRICE,
        payload
    }
}

export const changePostDescription = (payload) => {
    return {
        type: actionTypes.CHANGE_POST_DESCRIPTION,
        payload
    }
}

export const changePostContacts = (payload) => {
    return {
        type: actionTypes.CHANGE_POST_CONTACTS,
        payload
    }
}

export const addPost = (email, title, price, description, contacts) => {
    return async (dispatch) => {
  
      dispatch({
        type: actionTypes.ADD_POST_START
      });
  
      try {
              
        const response = await axios.post('/api/posts/addpost', {
          email, title, price, description, contacts
        });
         
        dispatch({
          type: actionTypes.ADD_POST_SUCCESS,
          payload: response
        })
  
        toast.success(response.data.message)
      }
  
      catch (error) {
        toast.error(error.response.data.message)
        
        dispatch({
          type: actionTypes.ADD_POST_FAILURE,
          payload: error.response.data.message
        })
      }
  
    }
  }