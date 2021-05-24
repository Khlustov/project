import { actionTypes } from '../constants';


export const changeTokenActionCreator = (payload) => {
  return {
      type: actionTypes.CHANGE_TOKEN,
      payload
  }
}

export const changeUserIdActionCreator = (payload) => {
    return {
        type: actionTypes.CHANGE_USERID,
        payload
    }
}

export const getEmailFromLocalStorage = (payload) => {
    return {
        type: actionTypes.GET_EMAIL,
        payload
    }
}

export const getPasswordFromLocalStorage = (payload) => {
    return {
        type: actionTypes.GET_PASSWORD,
        payload
    }
}

export const getNameFromLocalStorage = (payload) => {
    return {
        type: actionTypes.GET_NAME,
        payload
    }
}