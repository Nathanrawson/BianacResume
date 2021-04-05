import React from 'react'
import Link from './Link'
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
                <h1><Link href="mailto:email@example.com"><p className="minerva-font" >Get in Touch →</p></Link>
                </h1>
            </div>
            <div>
                <h3><p className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
                >Instagram</p>&#65279; / <p className="minerva-font"
                    onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</p> / <p className="minerva-font"
                        onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</p>
                </h3>
            </div>
        </div>
    </div>)
}

export default Home;