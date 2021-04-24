// import logo from './logo.svg';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import About from "./pages/About"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {
  return (

    <div className="page-container">
      <div className="content-wrap">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          {/* <Wrapper> */}
          <Switch>
            <Route exact path={"/"} component={About} />
            <Route exact path={"/portfolio"} component={Project} />
            <Route exact path={"/resume"} component={Resume} />
          </Switch>
          {/* </Wrapper> */}
        </HashRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
