import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';

export const getAllPosts = () => {
    return async (dispatch) => {
  
      dispatch({
        type: actionTypes.GET_ALL_POSTS_START
      });
  
      try {
              
        const response = await axios.get('/api/main');
                 
        dispatch({
          type: actionTypes.GET_ALL_POSTS_SUCCESS,
          payload: response.data.data.posts
        })
                        
      }
  
      catch (error) {
        toast.error(error.response.data.message)
        
        dispatch({
          type: actionTypes.GET_POST_FAILURE,
          payload: error.response.data.message
        })
      }
  
    }
  }