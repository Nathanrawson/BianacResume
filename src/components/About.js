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
                <p>My name is Bianca and I recently graduated with my Master’s in International Business Management from
                the
                University of East London. I have spent the last 5 years working in the social media industry,
                specializing
                in content creation. I’ve recently moved back to the US and I’m looking for my next role as a Social
                Media
                Marketer.<br></br><br></br>As a Social Media Marketer, I have a passion for content creation and have a deep
                understanding of the digital media space and the role of social media channels such as Tiktok,
                Instagram,
                Facebook, Twitter, Youtube, LinkedIn, and Pinterest.<br></br><br></br>I know how to engage an audience, spot
                emerging
                social media trends, turn analytics into strategy, and develop innovative and captivating social
                media
                content for any target market.<br></br><br></br>In my spare time, I enjoy taking on creative projects -
                whether it
                be
                graphic design, interior design, or video projects!</p>
            </div>

        </div>
        <BottomLinks />
    </div>)
}

export default About;