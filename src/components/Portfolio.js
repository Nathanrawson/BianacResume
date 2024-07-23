import React from 'react'
import PortfolioSquare from './PortfolioSquare'
import BottomLinks from './BottomLinks'
import './App.css';

const Portfolio = (props) => {
    return (<div><div id="PortfolioContent"><div><h3>Portfolio</h3><PortfolioSquare id="Portfolio1" title="University Of East London Social Media"></PortfolioSquare ><PortfolioSquare id="Portfolio2" title="Student Beans Instagram"></PortfolioSquare><PortfolioSquare id="Portfolio3" title="No Guilt Bakes Instagram"></PortfolioSquare><PortfolioSquare id="Portfolio4" title="OneDrive X (Twitter)"></PortfolioSquare><PortfolioSquare id="Portfolio5" title="Microsoft Surface X (Twitter)"></PortfolioSquare><PortfolioSquare id="Portfolio6" title="Bonza TikTok"></PortfolioSquare><PortfolioSquare id="Portfolio7" title="Dunkin' Donuts UK"></PortfolioSquare></div>  <div id="HomeLinks">

    </div>  </div> <BottomLinks /> </div>)
}

export default Portfolio;
