import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import PostLogin from './components/PostLogin';
import { checkLogin } from './store/actionCreators';
import './app.css';

export default function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkLogin());
    })

    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
        <Router>
            {isLoggedIn ? <PostLogin /> : <>
                <Redirect to="/login" />
            </>}
            <Route exact path="/login">
                <Login />
            </Route>
        </Router>
    )
}