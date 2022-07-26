import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import User from './User.jsx'

function Users({ match }) {
    return (
        <div className="page__content">
            <h1>Users</h1>
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`${match.url}/github`}>Github</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`${match.url}/facebook`}>Facebook</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/products">
                    <span>Select a user please</span>
                </Route>
                <Route path="/users/:userName" component={User} />
            </Switch>
        </div>
    )
}

export default Users
