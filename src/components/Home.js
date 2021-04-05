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
                <h1><Link href="mailto:email@example.com"><span className="minerva-font" >Get in Touch →</span></Link>
                </h1>
            </div>
            <div>
                <h3><span className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
                >Instagram</span>&#65279; / <span className="minerva-font"
                    onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</span> / <span className="minerva-font"
                        onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</span>
                </h3>
            </div>
        </div>
    </div>)
}

export default Home;