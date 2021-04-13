import React from "react";
import Header from "../Header/index.js"

const projects = [
    {
        title: "Collect 'Em All",
        deployed: "card-collector0.herokuapp.com/",
        github: "https://github.com/martinmondaca/Card_Collector",
        image: "empty"
    },
    {
        title: "Date Night",
        deployed: "https://tiffcrockett.github.io/dinner-movie-app/",
        github: "https://github.com/martinmondaca/dinner-movie-app",
        image: "empty"
    },
    {
        title: "Weather Dashboard",
        deployed: "https://martinmondaca.github.io/Weather_Dashboard/",
        github: "https://github.com/martinmondaca/Weather_Dashboard",
        image: "empty"
    },
    {
        title: "Note Taker",
        deployed: "https://secret-bayou-08688.herokuapp.com/notes",
        github: "https://github.com/martinmondaca/Note_Taker",
        image: "empty"
    },
    {
        title: "Work Day Scheduler",
        deployed: "https://martinmondaca.github.io/Work_Day_Scheduler/",
        github: "https://github.com/martinmondaca/Work_Day_Scheduler",
        image: "empty"
    },

    {
        title: "Code Quiz",
        deployed: "https://martinmondaca.github.io/Code_Quiz/",
        github: "https://github.com/martinmondaca/Code_Quiz",
        image: "empty"
    }
]

function Project() {
    return (
        <>

            <Header />
            <div className="container ">

                {
                    projects.map((each) => {
                        return (
                            <div className="col-6">

                                <p>{each.title}</p>
                                <a href={each.deployed}>Deployed Link</a>
                                <a href={each.github}>GitHub repo</a>

                            </div>

                        )

                    })


                }


            </div>
        </>
    )

}

export default Project