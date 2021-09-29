import React, {useState} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BlogOverviewPage from './pages/BlogOverviewPage';
import BlogPostPage from './pages/BlogPostPage';
import Navigation from "./components/Navigation";
import {Redirect, Route, Switch} from 'react-router-dom'

function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <LoginPage setAuthenticationHandler={toggleIsAuthenticated} />
                </Route>
                <Route path="/blogposts">
                    {isAuthenticated ? <BlogOverviewPage/> : <Redirect to="/"/>}
                </Route>
                <Route path="/blog/:blogId">
                    {isAuthenticated ? <BlogPostPage/> : <Redirect to="/"/>}
                </Route>
            </Switch>
        </>
    );
}

export default App;
