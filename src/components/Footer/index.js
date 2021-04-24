import React from "react"
import "./style.css"


function Footer(params) {

    return (
        <footer className="page-footer light-blue lighten-5">
            <div className="container">
                <div className="row">
                    <div className="col center l4 offset-l4 m4 offset-m4 s6 offset-s3">
                        <a href="https://www.linkedin.com/in/martinmondaca/" target="_blank" className="profileIcon fab fa-linkedin fa-3x" rel="noreferrer"></a>
                        <a href="https://github.com/martinmondaca" target="_blank" className="profileIcon fab fa-github fa-3x" rel="noreferrer"></a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;