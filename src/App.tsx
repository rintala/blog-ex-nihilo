import * as React from "react";
import "./App.css";
import { Post } from "./components/Post";
import { MainFeed } from "./components/MainFeed";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { About } from "./components/About";

const App: React.FC = () => {
  console.log("app", Post);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="NavbarLink" to="/">
            <h1>Ex Nihilo</h1>
          </Link>
        </header>
        <div id="headerBar">
          <Link className="NavbarLink" to="/">
            <h2>Posts </h2>
          </Link>
          <Link className="NavbarLink" to="/about">
            <h2>About </h2>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={MainFeed} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
