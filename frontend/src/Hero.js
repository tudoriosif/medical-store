import React from 'react'
import "./Hero.css";
function Hero() {
    return (
        <div className="heroPage">
            <div className="one"></div>

            <div className="two">
                <div className = "welcomeBox">
                    <div className ="welcomeText">
                        Welcome to
                    </div>
                    <br></br>
                    <div className="medsText">
                        Meds Connect
                    </div>
                    <br></br>
                    <div className="solutionText">
                        Your solution for managing hospital problems
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
