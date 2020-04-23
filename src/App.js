import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import HomeRun from "./components/HomeRun";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/drews_portfolio/">
      <NavComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drews_portfolio/about" component={About} />
        <Route path="/drews_portfolio/contact" component={Contact} />
        <Route path="/drews_portfolio/projects" component={Portfolio} />
      </Switch>
      <HomeRun />
    </Router>
  );
}

export default App;
