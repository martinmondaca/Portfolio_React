// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Project from "./components/Project"
import About from "./pages/About"

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Navbar />
            <Wrapper>
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Project} />
            </Wrapper>
          </div>
        </Router>
      </div>    </>
  );
}

export default App;
