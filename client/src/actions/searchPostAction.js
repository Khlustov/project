import { actionTypes } from '../constants';

export const searchPostActionCreator = (payload) => {
    return {
        type: actionTypes.SEARCH_POST,
        payload
    }
}