import { actionTypes } from '../constants';
import {toast} from 'react-toast';
import axios from 'axios';

export const getUserPosts = (email) => {
    return async (dispatch) => {
  
      dispatch({
        type: actionTypes.GET_POST_START
      });
  
      try {
              
        const response = await axios.get('/api/posts/userposts', {params: {userEmail: email}});
                 
        dispatch({
          type: actionTypes.GET_POST_SUCCESS,
          payload: response.data.user.posts
        })
                  
      }
  
      catch (error) {
        
      }
  
    }
  }