import React from 'react'
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (<div><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={() => window.location.href.includes("/") ? "../" : "./"} ><p id="site-title" className="navbar-brand" >Bianca Franco</p></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="nav-right-div">
                <ul className="float-right navbar-nav">
                    <li className=" nav-item active">
                        <Link to={() => window.location.href.includes("/") ? "../about" : "./about"}><p className="nav-link" >About<span className="sr-only">(current)</span></p></Link>
                    </li>
                    <li className="pull right nav-item active">
                        <Link to={() => window.location.href.includes("/") ? "../resume" : "./resume"}><p className="nav-link" >Resume<span className="sr-only">(current)</span></p></Link>
                    </li>
                    <li className="pull right nav-item active">
                        <Link to={() => window.location.href.includes("/") ? "../portfolio" : "./portfolio"}><p className="nav-link">Portfolio<span className="sr-only">(current)</span></p></Link>
                    </li>
                    <li className="pull right nav-item active">
                        <Link to={() => window.location.href.includes("/") ? "../contact" : "./contact"}><p className="nav-link">Contact Me<span className="sr-only">(current)</span></p></Link>
                    </li>
                    <li>
                        <p onClick={() => { window.open("https://www.instagram.com/biancaxfranco/") }}><i className="fa fa-instagram" aria-hidden="true"></i></p>
                    </li>
                    <li>
                        <p onClick={() => { window.open("https://www.linkedin.com/in/bianca-franco-97a72910a/") }}><i className="fa fa-linkedin" aria-hidden="true"></i></p>
                    </li>
                </ul>
            </div>
        </div>
    </nav></div >
    )
}


export default Nav;