
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_DATA = 'FETCH_DATA';
export const API_ERROR = 'API_ERROR';

export const login = () => {
    return { type: LOGIN }
}

export const apiError = () => {
    return { type: API_ERROR }
}


export const logout = () => {
    return { type: LOGOUT }
}

export const fetch = (payload) => {
    return { type: FETCH_DATA, payload }
}

export const fetchData = () => {
    return async (dispatch) => {
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then(function (response) {
                dispatch(fetch(response?.data?.data));
                console.log(response);
            })
            .catch(function (error) {
                dispatch(apiError());
                console.log(error);
            })
    }
}