import React from "react";
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
import NotFound from './pages/NotFound';


import "./App.css";
import CountryPage from "./pages/CountryPage";
import PremiumUserPage from "./pages/PremiumUserPage";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>


          <Route path="/our-mission">
            <MissionPage />
          </Route>

          <Route path="/about-us" >
            <AboutPage />
          </Route>
          <Route path="/contact" >
            <ContactPage />
          </Route>

          <Route path="/my-account" >
            <PremiumUserPage />
          </Route>

          <Route path="/countries/:id" >
            <CountryPage />
          </Route>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route component={NotFound} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
