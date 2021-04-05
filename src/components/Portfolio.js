import React from 'react'
import PortfolioSquare from './PortfolioSquare'
import BottomLinks from './BottomLinks'
import './App.css';

const Portfolio = (props) => {
    return (<div><div id="PortfolioContent"><div><h3>Portfolio</h3><PortfolioSquare id="Portfolio1" title="University Of East London Social Media"></PortfolioSquare ><PortfolioSquare id="Portfolio2" title="Student Beans Instagram"></PortfolioSquare><PortfolioSquare id="Portfolio3" title="No Guilt Bakes Instagram"></PortfolioSquare></div>  <div id="HomeLinks">

    </div>  </div> <BottomLinks /> </div>)
}

export default Portfolio;