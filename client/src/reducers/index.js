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
    postId: '',    
    postTitle: '',
    postPrice: '',
    postDescription: '',
    postContacts: '',
    somePostData: null,
    posts: null,
    addingPostStatus: false,
    allPosts: null,
    searchValue: ''
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
        error: null,
        loading: false,
        userData: null,
        token: null,
        userId: null,
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
        name: action.payload.config.data.name,
        email: action.payload.config.data.email,
        password: action.payload.config.data.password,
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

    if(action.type === actionTypes.CHANGE_POST_PICTURE) {
      return {
        ...state,
        postPicture: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_POST_TITLE) {
      return {
        ...state,
        postTitle: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_POST_PRICE) {
      return {
        ...state,
        postPrice: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_POST_DESCRIPTION) {
      return {
        ...state,
        postDescription: action.payload
      }
    }

    if(action.type === actionTypes.CHANGE_POST_CONTACTS) {
      return {
        ...state,
        postContacts: action.payload
      }
    }

    if(action.type === actionTypes.ADD_POST_START) {
      return {
        ...state,
        loading: true
      }
    }

    if(action.type === actionTypes.ADD_POST_SUCCESS) {
      return {
        ...state,
        somePostData: action.payload,
      }
    }

    if(action.type === actionTypes.CHANGE_ADDING_POST_STATUS) {
      return {
        ...state,
        addingPostStatus: action.payload
      }
    }

    if(action.type === actionTypes.RETURN_ADDING_POST_STATUS) {
      return {
        ...state,
        addingPostStatus: action.payload
      }
    }

    if(action.type === actionTypes.ADD_POST_START) {
      return {
        ...state,
        error: action.payload
      }
    }

    if(action.type === actionTypes.GET_POST_START) {
      return {
        ...state,
        loading: true
      }
    }

    if(action.type === actionTypes.GET_POST_SUCCESS) {
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    }

    if(action.type === actionTypes.GET_POST_FAILURE) {
      return {
        ...state,
        error: action.payload
      }
    }

    if(action.type === actionTypes.GET_ALL_POSTS_START) {
      return {
        ...state,
        loading: true
      }
    }

    if(action.type === actionTypes.GET_ALL_POSTS_SUCCESS) {
      return {
        ...state,
        loading: false,
        allPosts: action.payload
      }
    }

    if(action.type === actionTypes.GET_ALL_POSTS_FAILURE) {
      return {
        ...state,
        error: action.payload
      }
    }

    if(action.type === actionTypes.SEARCH_POST) {
      return {
        ...state,
        searchValue: action.payload
      }
    }

    if(action.type === actionTypes.GET_POST_ID) {
      return {
        ...state,
        postId: action.payload
      }
    }

    return state;
}

export default reducer