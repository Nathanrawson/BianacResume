import './PortfolioCss.css';
import Link from './Link';

const PortfolioSquare = (props) => {
    const linkHref = props.href ? props.href : `portfolio/${props.id.toLowerCase()}`;

    return (
        <div id={props.id} className="portfolio-square">
            <div 
                onMouseOut={() => { document.querySelector(`#${props.id} > div > h3`).style.opacity = "0"; }} 
                onMouseOver={() => { document.querySelector(`#${props.id} > div > h3`).style.opacity = "1"; }}
            >
                <h3><Link href={linkHref}>{props.title}</Link></h3>
            </div>
        </div>
    );
}

export default PortfolioSquare;
