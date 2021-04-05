import React from 'react';
import './PortfolioCss.css';
import './App.css';
import Link from './Link';
import BottomLinks from './BottomLinks'

function GetImage() {
    var urlLength = window.location.href.substring().length
    var num = urlLength - 10;
    var portfolio = window.location.href.substring(num);

    if (portfolio === "portfolio1") {
        return "/static/media/biancaUEL.2c58c3c0.jpg"
    }
    else if (portfolio === "portfolio2") {
        return "/static/media/BiancaStudentBeans.d39cb218.jpg"
    }
    else if (portfolio === "portfolio3") {
        return "/static/media/BiancaKeto.f8834319.jpg"
    }
}

function GetLink() {
    var portfolio = window.location.href.substring(32);
    if (portfolio === "portfolio1") {
        return (<div id="PortfolioLinks"><div className="portfolio-link-div float-right"><Link href="./portfolio2">
            <div className="portfolio-inner-div1"><h2 className="portfolio-link">STUDENT BEANS INSTAGRAM</h2></div>
            <div className="portfolio-inner-div2"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div></Link></div></div>);
    } else if (portfolio === "portfolio2") {
        return (<div id="PortfolioLinks"><div className="portfolio-link-div float-left">
            <Link href="./portfolio1">  <div className="portfolio-inner-div2"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                <div className="portfolio-inner-div1"><h2 className="portfolio-link">university of east london Social media</h2></div>
            </Link>
        </div><div className="portfolio-link-div float-right">
                <Link href="./portfolio3"><div className="portfolio-inner-div1"><h2 className="portfolio-link">NO GUILT BAKES INSTAGRAM
</h2></div>
                    <div className="portfolio-inner-div2"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div></Link></div></div>);
    } else if (portfolio === "portfolio3") {
        return (<div id="PortfolioLinks"><div className="portfolio-link-div float-left">
            <Link href="./portfolio2">  <div className="portfolio-inner-div2"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                <div className="portfolio-inner-div1"><h2 className="portfolio-link">STUDENT BEANS INSTAGRAM</h2></div>
            </Link>
        </div></div>);
    }
}

function Wording() {
    var portfolio = window.location.href.substring(32);

    if (portfolio === "portfolio1") {
        return <div ><div><h3>UNIVERSITY OF EAST LONDON</h3><div id="WordingContent">
            universityofeastlondon
            -Twitter: <Link href="https://twitter.com/uel_news">@UELNews</Link>, <Link href="https://twitter.com/SBL_UEL">@UEL_SBL</Link>, <Link href="https://twitter.com/ACEatUEL">@ACEatUEL</Link>, <Link href="https://twitter.com/ArtsCreativeUEL">@ArtsCreativeUEL</Link>
            <br></br><br></br>
        -Tiktok: <Link href="https://www.tiktok.com/@universityofeastlondon?lang=en">@universityofeastlondon</Link>
            <br></br><br></br>
        -Youtube: <Link href="https://www.youtube.com/channel/UCS7MPWIt2_oCPt-InEfle1g/featured">University of East London</Link>
            <br></br><br></br>
        -Created top 3 performing posts across all platforms (photos, videos, graphics)
        <br></br><br></br>
        -Covered live events and promotions via Instagram live, IGTV, and Facebook Live
        <br></br><br></br>
        -Managed 6 accounts (Instagram, Twitter, LinkedIn, Youtube)
        <br></br><br></br>
        -Grew Twitter accounts from 11,700 monthly impressions to 37,000 - tripling overall impressions in just 2 months
        <br></br><br></br>
        -Pioneered using the new 'reels' functionality on Instagram, content which has received over 40,000 views
        <br></br><br></br>
        -Spearheaded social media training for social media ambassadors</div></div> </div>;
    }
    else if (portfolio === "portfolio2") {
        return <div><h3>STUDENT BEANS</h3><div>
            -Instagram - <Link href="https://www.instagram.com/studentbeans/">@StudentBeans</Link>
            <br></br><br></br>
        -Tiktok: <Link href="https://www.tiktok.com/@studentbeans?lang=en">@StudentBeans</Link>
            <br></br><br></br>
        -Grew Instagram Account from 50,000 to 103,000+ followers
        <br></br><br></br>
        -Created and utilized interactive Instagram stories and increased engagement by 75%
        <br></br><br></br>
        -Spearheaded brand design, graphics, blog, and video content on Instagram and Tiktok
        <br></br><br></br>
        -Worked on social media campaigns with brands such as H&M, Dunkin Donuts, ASOS, and more!
        <br></br><br></br>
        -Attended and covered live PR events and press junket interviews via Instagram stories</div></div>;
    } else if (portfolio === "portfolio3") {
        return <div><h3>NO GUILT BAKES</h3><div>
            -Instagram - <Link href="https://www.instagram.com/noguiltbakes/">@NoGuiltBakes</Link>
            <br></br><br></br>
        -Created and grew Instagram to 3,600+ followers
        <br></br><br></br>
        -Managed monthly social media calendar
        <br></br><br></br>
        -Managed social media campaigns and paid Facebook and Instagram Ads
        <br></br><br></br>
        -Curated brand cohesive Canva templates and branding</div></div>;
    }
}


const PortfolioDetail = (props) => {
    return (
        <div>
            <div id="PortfolioMain">
                <div id="DetailImage" style={{
                    width: "40%",
                    display: "inline-block",
                    backgroundSize: "cover",
                    backgroundImage: `url('${GetImage()}')`,
                    height: "75vw",
                }}></div>
                <div id="DetailWords">{Wording()}</div>
            </div>
            {GetLink()}
            <BottomLinks />
        </div>)
}

export default PortfolioDetail;