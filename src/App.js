import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MissionPage from "./pages/MissionPage";
import CountryRoutes from "./pages/Routing";

import "./App.css";
import CountryPage from "./pages/CountryPage";
import PremiumUserPage from "./pages/PremiumUserPage";
import NavLinks from "./components/NavLinks";
import NotFound from './pages/NotFound';
import USerButtons from "./components/UserButtons";
import LoggedInButtons from "./components/LoggedInButtons";
import Cookies from "js-cookie";

function App() {
  return (
    <div className="App">
      <Router>
        <NavLinks />

        <Switch>
          <Route path="/our-mission">
            <MissionPage />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/my-account">
            <PremiumUserPage />
          </Route>

          <Route path="/countries/:id">
            <CountryPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
