import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import NavLinks from "./components/NavLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Router>
          <NavLinks />
          <main>
            <Switch>
              <Route exact path="/">
                <Projects />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
