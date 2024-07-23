import React from 'react'
import BottomLinks from './BottomLinks'

import './App.css';

const About = (props) => {
    return (<div id="AboutContent">
        <div>
            <div id="AboutImage">
            </div>
            <div id="AboutDiv">
                <h1>About</h1>
                <p>Hi, I'm Bianca! I've spent the last 7 years immersed in the social media industry, specializing in content creation and strategy. <br></br><br></br>For the past 3 years, I've managed several Microsoft brand accounts, amassing over 7 million followers across X (Twitter), Instagram, and TikTok. My focus has been on creating engaging content, crafting effective strategies, and fostering vibrant communities.<br></br><br></br>My true passion lies in content creation, particularly for TikTok and Instagram. In my spare time, I freelance for brands like Dunkin’ Donuts UK, Banza, and StudentBeans, bringing their social media presence to life.
                Beyond work, I'm a big foodie, love fashion, enjoy traveling, and thrive on being creative.<br></br><br></br>When it comes to all things social, I thrive at engaging audiences, spotting emerging trends, transforming analytics into actionable strategies, and developing innovative, captivating content for any target market.</p>
            </div>

        </div>
        <BottomLinks />
    </div>)
}

export default About;