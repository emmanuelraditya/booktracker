import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';

function RoutesPage() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
            </Switch>
        </Router>
    )
}
export default RoutesPage;



