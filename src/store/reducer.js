import { LOGIN, LOGOUT, FETCH_DATA, API_ERROR } from './actionCreators';

const initialState = {
    isLoggedIn: false,
    empData: [],
    isApiError: false,
}

const reducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        return { ...state, isLoggedIn: true }
    }
    if (action.type === LOGOUT) {
        return { ...state, isLoggedIn: false }
    }
    if (action.type === FETCH_DATA) {
        return { ...state, isApiError: false, empData: action.payload }
    }

    if (action.type === API_ERROR) {
        return { ...state, isApiError: true }
    }

    return state
}

export default reducer;