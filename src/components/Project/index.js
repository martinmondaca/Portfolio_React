import React from "react";
import "./style.css"
import cardCollectorScreenshot from "../../assets/images/cardcollector.png"
import dateNightScreenshot from "../../assets/images/datenight.png"
import weatherScreenshot from "../../assets/images/weatherdashboard.png"
import noteTakerScreenshot from "../../assets/images/notetaker.png"
import schedulerScreenshot from "../../assets/images/scheduler.png"
import employeeDirectoryScreenshot from "../../assets/images/employeedirectory.png"

const projects = [
    {
        title: "Collect 'Em All",
        description: "Collect ’Em All is an application used to track physical card collections digitally. Specifically, the current application is designed for Bazooka Baseball cards for the years 1959 to 1990. This application is deployed using Heroku, and is designed to be a digital DNA of a users physical card collections.",
        deployed: "card-collector0.herokuapp.com/",
        github: "https://github.com/martinmondaca/Card_Collector",
        image: cardCollectorScreenshot,
    },
    {
        title: "Date Night",
        description: "The Date night application is designed to help individuals plan the perfect dinner and a movie date. The application takes in the users movie choice and zip code in order to provide a curated list of restaurants that would best go with their movie choice.",
        deployed: "https://tiffcrockett.github.io/dinner-movie-app/",
        github: "https://github.com/martinmondaca/dinner-movie-app",
        image: dateNightScreenshot
    },
    {
        title: "Weather Dashboard",
        description: "Weather Dashboard is an application that allows you to view the current weather for a selected city. You can also view a 5-day forecast for that specified location.",
        deployed: "https://martinmondaca.github.io/Weather_Dashboard/",
        github: "https://github.com/martinmondaca/Weather_Dashboard",
        image: weatherScreenshot
    },
    {
        title: "Note Taker",
        description: "This application is designed for writing, saving, and editing personal notes. This app uses Node.js, Express.js, and saves and retrieves information from a JSON file.",
        deployed: "https://secret-bayou-08688.herokuapp.com/notes",
        github: "https://github.com/martinmondaca/Note_Taker",
        image: noteTakerScreenshot
    },
    {
        title: "Work Day Scheduler",
        description: "This is a simple application used to keep track of daily tasks during the work day.",
        deployed: "https://martinmondaca.github.io/Work_Day_Scheduler/",
        github: "https://github.com/martinmondaca/Work_Day_Scheduler",
        image: schedulerScreenshot
    },

    {
        title: "Employee Directory",
        description: "This is a single-page application that is built using React. It generates a random directory of 50 employees that the user can sort by clicking on a specific column. The employees can also be filtered by first name.",
        deployed: "https://martinmondaca.github.io/Employee_Directory/",
        github: "https://github.com/martinmondaca/Employee_Directory",
        image: employeeDirectoryScreenshot
    }
]

function Project() {
    return (

        <main className="container row">
            <h3 className="pageTitle center-align">My Work</h3>

            {
                projects.map((each) => {
                    return (
                        <div className="card grey lighten-3 col l6 m10 offset-m1 s10 offset-s1 hoverable app-holder">
                            <div className="card-image waves-effect waves-block waves-ligh">
                                <img className="activator" src={each.image} alt="App Screenshot" height="275" width="75"></img>
                            </div>

                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{each.title}<i class="material-icons right">more_vert</i></span>
                                <p><a href={each.deployed}>Deployed Link</a></p>
                                <p><a href={each.github}>Github</a></p>

                            </div>

                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{each.title}<i className="material-icons right">close</i></span>
                                <p>{each.description}</p>
                            </div>



                        </div>
                    )

                })

            }
        </main>
    )

}

export default Project