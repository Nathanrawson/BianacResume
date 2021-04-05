import React from 'react'
import BottomLinks from './BottomLinks'

const Contact = () => {
    document.querySelectorAll("#navbarNavDropdown > div > ul  a p").forEach(x => x.style.fontWeight = 'initial')

    return (<div><h4 id="ContactText">CONTACT ME USING THE FORM BELOW OR DM ME ON INSTAGRAM @BIANCAXFRANCO.</h4>  <BottomLinks /></div>)
}

export default Contact;