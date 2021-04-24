// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Router>
          <Navbar />
          {/* <Wrapper> */}
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Project} />
          <Route exact path="/resume" component={Resume} />
          {/* </Wrapper> */}
        </Router>
        <About />
      </div>

      <Footer />
    </div>
  );
}

export default App;
