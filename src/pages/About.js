import React from "react";
import profilePic from "../assets/images/portfolio_image.JPG"
import "./style.css"

function About() {
    return (
        <>
            <main className="container about-me">
                <h3 className="pageTitle center-align">About Me</h3>
                <p className="center-align"><b>martin7mondaca@gmail.com | (602)-573-1484</b></p>

                <div className="container">
                    <img className="profilePic responsive-img  z-depth-3" src={profilePic} width="150" alt="profile of Martin" />

                    <p>Hi there, my name is Martin! I'm a current full-stack web development student at the University of Arizona coding bootcamp.
                    I will be completing the bootcamp and will also be receiving my certification on <time dateTime="2021-05-03">May 03, 2021.</time></p>

                    <p>Some of the subjects that I heave learned in my bootcamp include the following:</p>
                    <ul>
                        <li className="skillItem">HTML</li>
                        <li className="skillItem">CSS</li>
                        <li className="skillItem">JavaScript</li>
                        <li className="skillItem">Bootstrap</li>
                        <li className="skillItem">APIs</li>
                        <li className="skillItem">NodeJS</li>
                        <li className="skillItem">OOP</li>
                        <li className="skillItem">express</li>
                        <li className="skillItem">MySQL</li>
                        <li className="skillItem">MVC</li>
                        <li className="skillItem">NoSQL</li>
                        <li className="skillItem">PWA</li>
                        <li className="skillItem">React</li>

                    </ul>
                    <p>I'm currently in the market for a job in web development; more specifically work that involves front-end web development, database administration, or React.js.
                    I'm also very much interested in relocating outside of Arizona!
                    </p>

                    <p> A little personal infomration about myself. I'm an Arizona native with a passion for coding, science, and video games. I love spending time online with friends
                    and going to the movies with my sister. One of my all-time favorite books of is <em>Me Talk Pretty One Day</em> by David Sedaris,
                    and one of my all-time favorite songs is 'Radiohead' by Creep.
                    </p>

                    <p>Thank you so much for taking the time to visit my portfolio!</p>


                </div>



            </main>
            <figure className="container z-depth-3">
                <blockquote>
                    <q>A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying.
                        </q>
                </blockquote>
                <figcaption>-B.F. Skinner (1904-1990), American psychologist</figcaption>
            </figure>
        </>
    )
}

export default About;
