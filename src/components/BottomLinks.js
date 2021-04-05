import React from 'react';

const BottomLinks = () => {

    return (<div id="HomeLinks">
        <div>
            <h3><span className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
            >Instagram</span>&#65279; / <span className="minerva-font"
                onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</span> / <span className="minerva-font"
                    onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</span>
            </h3>
        </div>
    </div>)
}

export default BottomLinks;