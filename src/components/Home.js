import React from 'react'
import './App.css';

const Home = (props) => {
    return (<div><div id="LandingImage">
        <div id="LandingContent">
            <div>
                <h1 className="landing-title">
                    SOCIAL MEDIA
            </h1>
                <h1 className="landing-title">
                    AND CONTENT
            </h1>
                <h1 className="landing-title">
                    MARKETER.
            </h1>
            </div>
            <button id="ResumeButton" className="btn btn-primary">Resume</button>
        </div>
    </div>
        <div id="HomeLinks">
            <div>
                <h1><a className="minerva-font" href="mailto:email@example.com">Get in Touch →</a>
                </h1>
            </div>
            <div>
                <h3><a className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
                >Instagram</a>&#65279; / <a className="minerva-font"
                    onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</a> / <a className="minerva-font"
                        onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</a>
                </h3>
            </div>
        </div>
    </div>)
}

export default Home;