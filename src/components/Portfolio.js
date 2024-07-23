import React from 'react'
import PortfolioSquare from './PortfolioSquare'
import BottomLinks from './BottomLinks'
import './App.css';

const Portfolio = (props) => {
    return (<div><div id="PortfolioContent"><div><h3>Portfolio</h3><PortfolioSquare id="Portfolio1" title="University Of East London Social Media"></PortfolioSquare ><PortfolioSquare id="Portfolio2" title="Student Beans Instagram"></PortfolioSquare><PortfolioSquare id="Portfolio3" title="No Guilt Bakes Instagram"></PortfolioSquare><PortfolioSquare id="Portfolio4" href="https://x.com/onedrive/media" title="OneDrive X (Twitter)"></PortfolioSquare><PortfolioSquare id="Portfolio5" href="https://x.com/surface" title="Microsoft Surface X (Twitter)"></PortfolioSquare><PortfolioSquare id="Portfolio6" href="https://www.tiktok.com/@dunkinuk?_t=8oGuzrOjOGc&_r=1" title="Bonza TikTok"></PortfolioSquare><PortfolioSquare href="https://www.tiktok.com/@eatbanza?_t=8oGv5YWY8pr&_r=1" id="Portfolio7" title="Dunkin' Donuts UK"></PortfolioSquare></div>  <div id="HomeLinks">

    </div>  </div> <BottomLinks /> </div>)
}

export default Portfolio;
