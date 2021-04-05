import React from 'react';

const BottomLinks = () => {

    return (<div id="HomeLinks">
        <div>
            <h3><a className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
            >Instagram</a>&#65279; / <a className="minerva-font"
                onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</a> / <a className="minerva-font"
                    onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</a>
            </h3>
        </div>
    </div>)
}

export default BottomLinks;