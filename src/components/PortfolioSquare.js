import './PortfolioCss.css';
import Link from './Link'

const PortfolioSquare = (props) => {

    return (<div id={props.id} className="portfolio-square">
        <div onMouseOut={(e) => { document.querySelector(`#${props.id} > div > h3`).style.opacity = "0" }} onMouseOver={(e) => { document.querySelector(`#${props.id} > div > h3`).style.opacity = "1" }}>
            <h3><Link href={`portfolio/${props.id.toLowerCase()}`}>{props.title}</Link></h3>
        </div></div>)
}

export default PortfolioSquare;