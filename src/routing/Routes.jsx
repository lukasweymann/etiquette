import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import TopicsPage from '../pages/TopicsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MissionPage from '../pages/MissionPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/topics'>
                    <TopicsPage />
                </Route>
                <Route path='/our-mission'>
                    <MissionPage />
                </Route>
                <Route path='/about-us'>
                    <AboutPage />
                </Route>
                <Route path='/contact'>
                    <ContactPage />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
