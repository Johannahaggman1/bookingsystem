import React from "react";
import {Link } from "react-router-dom";

const Footer = (props) => {

return (
<div className={"footer_wrapper"}> 
<div className={"footer_content"}>

   
    <p><i id={"footer-icon"} className="far fa-envelope"></i> agc@contact.com</p> 
    <Link to="/" className={"navbar-brand"}><i id={"footer-logo"} className={"fas fa-dumbbell fa-2x"}></i></Link>
    <p><i id={"footer-icon"} className="fas fa-phone"></i> 070-5620022</p>
 
 </div>
</div>
)


}

export default Footer;