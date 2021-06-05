import { actionTypes } from '../constants';


export const getPostIdActionCreator = (payload) => {
  return {
      type: actionTypes.GET_POST_ID,
      payload
  }
}