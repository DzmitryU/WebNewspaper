import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import Main from './Main';
import ArticleMenu from './ArticleMenu';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <div>
                        <h2>Main Menu</h2>
                        <div><NavLink to='/main' activeStyle={{color: 'red'}}>Main Page</NavLink></div>
                        <div><NavLink to='/articles' activeStyle={{color: 'red'}}>Articles Page</NavLink></div>
                        <div><NavLink to='/comments' activeStyle={{color: 'red'}}>Comments Page</NavLink></div>
                    </div>
                    <Route path='/main' component={Main}/>
                    <Route path='/articles' component={ArticleMenu}/>
                </div>

            </Router>
        </Provider>
    );
}

export default App