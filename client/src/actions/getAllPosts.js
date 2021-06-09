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
          payload: response.data
        })
                        
      }
  
      catch (error) {
        toast.error(`${error.response.data.message}`, {
          backgroundColor: "#323131",
          color: "#ffffff"
        })
        
        dispatch({
          type: actionTypes.GET_POST_FAILURE,
          payload: error.response.data.message
        })
      }
  
    }
  }