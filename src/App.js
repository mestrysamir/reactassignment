import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import PostLogin from './components/PostLogin';
import './app.css';

export default function App() {

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