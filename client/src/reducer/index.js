import { actionTypes } from '../constants'

const initialState = {
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
    userData: null,
    token: null,
    userId: null,
}

const reducer = (state = initialState, action) => {
    
    if(action.type === actionTypes.CHANGE_NAME) {
      return {
        ...state,
        name: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_EMAIL) {
      return {
        ...state,
        email: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_PASSWORD) {
      return {
        ...state,
        password: action.payload
      }
    }

    if(action.type === actionTypes.CLEAR_STATE) {
      return {
        ...state,
        name: '',
        email: '',
        password: '',
        error: null
      }
    }

    if(action.type === actionTypes.REGISTER_START) {
      return {
        ...state,
        loading: true
      }
    }

    if(action.type === actionTypes.REGISTER_SUCCESS) {
      return {
        ...state,
        loading: false,
        userData: action.payload
      }
    }

    if(action.type === actionTypes.REGISTER_FAILURE) {
      return {
        ...state,
        error: action.payload,
        name: '',
        email: '',
        password: '',
        loading: false,
      }
    }

    if(action.type === actionTypes.LOGIN_START) {
      return {
        ...state,
        loading: true
      }
    }

    if(action.type === actionTypes.LOGIN_SUCCESS) {
      return {
        ...state,
        loading: false,
        userData: action.payload,
        token: action.payload.data.token,
        userId: action.payload.data.userId
      }
    }  
    
    if(action.type === actionTypes.CHANGE_TOKEN) {
      return {
        ...state,
        token: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_USERID) {
      return {
        ...state,
        userId: action.payload
      }
    }

    if(action.type === actionTypes.GET_EMAIL) {
      return {
        ...state,
        email: action.payload
      }
    }

    if(action.type === actionTypes.GET_PASSWORD) {
      return {
        ...state,
        password: action.payload
      }
    }

    if(action.type === actionTypes.GET_NAME) {
      return {
        ...state,
        name: action.payload
      }
    }

    return state;
}

export default reducer