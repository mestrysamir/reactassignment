import React from 'react';
import {
    Switch,
    Route,

} from "react-router-dom";

import Header from '../Header';
import Dashboard from '../Dashboard';
import EmployeeDetails from '../EmployeeDetails';

function PostLogin() {
    return (
        <>  <Header />
            <Switch>
                <Route exact path="/employee/:id">
                    <EmployeeDetails />
                </Route>

                <Route exact path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </>

    );
}

export default PostLogin