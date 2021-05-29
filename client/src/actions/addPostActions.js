import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';

export const changePostPicture = (payload) => {
  return {
      type: actionTypes.CHANGE_POST_PICTURE,
      payload
  }
}

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

export const addPost = (email, picture, title, price, description, contacts) => {
    return async (dispatch) => {
  
      dispatch({
        type: actionTypes.ADD_POST_START
      });
  
      try {
              
        const response = await axios.post('/api/posts/addpost', {
          email, picture, title, price, description, contacts
        });
        
         
        dispatch({
          type: actionTypes.ADD_POST_SUCCESS,
          payload: response
        })

        dispatch({
          type: actionTypes.CHANGE_ADDING_POST_STATUS,
          payload: true
        })

        dispatch({
          type: actionTypes.RETURN_ADDING_POST_STATUS,
          payload: false
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