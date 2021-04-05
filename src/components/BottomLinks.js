import React from 'react';

const BottomLinks = () => {

    return (<div id="HomeLinks">
        <div>
            <h3><p className="minerva-font" onClick={() => { window.open("https://www.instagram.com/biancaxfranco") }}
            >Instagram</p>&#65279; / <p className="minerva-font"
                onClick={() => { window.open("https://www.tiktok.com/@biancaxfranco?lang=en") }}>Tiktok</p> / <p className="minerva-font"
                    onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}>Linkedin</p>
            </h3>
        </div>
    </div>)
}

export default BottomLinks;