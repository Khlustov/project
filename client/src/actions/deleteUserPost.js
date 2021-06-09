import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';

export const getPostIdActionCreator = (payload) => {
  return {
      type: actionTypes.GET_POST_ID,
      payload
  }
}

export const deleteUserPost = (email, postId) => {
    return async (dispatch) => {
  
      dispatch({
        type: actionTypes.DELETE_USER_POST_START
      });
  
      try {
              
        const response = await axios.post('/api/posts/delete', {email, postId});
                 
        dispatch({
          type: actionTypes.DELETE_USER_POST_SUCCESS,
          payload: response
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
          type: actionTypes.DELETE_USER_POST_FAILURE,
          payload: error.response.data.message
        })
      }
  
    }
  }