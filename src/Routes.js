import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './Pages/Home';
import Main from './Pages/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;