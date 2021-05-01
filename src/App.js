import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { MediaBar } from './components/MediaBar';

export default function App() {
    return (
        <Router>
            <NavigationBar />
            <MediaBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </Router>
    )
}