import { actionTypes } from '../constants';

export const clearState = () => {
  return {
      type: actionTypes.CLEAR_STATE,
  }
}