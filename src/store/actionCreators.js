
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_DATA = 'FETCH_DATA';
export const API_ERROR = 'API_ERROR';

export const login = () => {
    sessionStorage.setItem('token', Math.random().toString(2));
    return { type: LOGIN }
}

export const checkLogin = () => {
    return async (dispatch) => {
        if (sessionStorage.getItem('token')) {
            dispatch({ type: LOGIN })
        }
        return
    }
}

export const apiError = () => {
    return { type: API_ERROR }
}


export const logout = () => {
    sessionStorage.removeItem('token');
    return { type: LOGOUT }
}

export const fetch = (payload) => {
    return { type: FETCH_DATA, payload }
}

export const fetchData = () => {
    return async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                dispatch(fetch(response?.data));
                console.log(response);
            })
            .catch(function (error) {
                dispatch(apiError());
                console.log(error);
            })
    }
}