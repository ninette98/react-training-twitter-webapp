import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tweets from '../roots/tweets';
import Profile from '../roots/profile';

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Redirect from='/' exact to='/tweets' />
                    <Route path='/tweets' component={Tweets}/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </div>
        );
    }
}

export default Main;