import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';

import injectContext from './store/appContext';

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);