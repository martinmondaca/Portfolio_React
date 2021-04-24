import React from "react";
import { Link } from "react-router-dom";
// import Pdf from "../../assets/resume2020.pdf"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

    return (<>

        <nav className="light-blue lighten-5">
            <div className="nav-wrapper">
                <Link className="brand-logo center" to="/" >
                    <span className="black-text text-black">Martin Mondaca</span>
                </Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text text-black">menu</i></a>
                <ul className="left hide-on-med-and-down black-text">
                    <li>
                        <Link to="/">
                            <span className="black-text text-black">About Me</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" >
                            <span className="black-text text-black">My Work</span>
                        </Link>
                    </li>
                    <li>
                        <a className="black-text text-black" href="mailto:collectemall@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
                    </li>
                    <li>
                        <Link to="/resume">
                            <span className="black-text text-black">Resume</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li >
                <Link to="/">
                    About Me
                </Link>
            </li>
            <li>
                <Link to="/portfolio">
                    My Work
                </Link>
            </li>
            <li>
                <a href="mailto:collectemall@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
            </li>
            <li>
                <Link to="/resume">
                    Resume
                </Link>
            </li>
        </ul>


    </>

    );
}

export default Navbar;
