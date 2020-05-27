import React from "react";
import {Link } from "react-router-dom";


const Nav = (props) => {

return (
<div className={"nav_wrapper"}> 
<nav className={"navbar navbar-expand-lg navbar-light "}>

<Link to="/" className={"navbar-brand"}><i id={"nav-logo"} className={"fas fa-dumbbell fa-2x"}> StG</i></Link>
  {/* <a className={"navbar-brand"} href={"#"}>  SGO</a> */}
  <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarSupportedContent"} aria-controls={"navbarSupportedContent"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
    <span className={"navbar-toggler-icon"}></span>
  </button>

  <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
    <ul className={"navbar-nav mr-auto"}>
      <li className={"nav-item active"} id="nav-homeIcon">
        {/* <a className={"nav-link"} href={"#"}>Hem <span className={"sr-only"}>(current)</span></a> */}
        <Link to="/" className={"nav-link"}><i id={"home-icon"} className={"fas fa-home"}>HEM  </i></Link>
      </li>
      <li className={"nav-item"}>
        {/* <a className={"nav-link"} href={"#"}>| Boka</a> */}
        <Link to="/form" className={"nav-link"}> BOKA </Link>
      </li>
      <li className={"nav-item"}>
      <Link to="/about" className={"nav-link"}> OM OSS  </Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      <li className={"nav-item"}>
      <Link to="/" className={"nav-link"}>UTBUD </Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      <li className={"nav-item"}>
      <Link to="/register" className={"nav-link"}>BLI MEDLEM </Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      <li className={"nav-item"}>
      <Link to="/contact" className={"nav-link"}> KONTAKTA OSS </Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      <li className={"nav-item"}>
      <Link to="/adminsida" className={"nav-link"}> ADMIN </Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      <li className={"nav-item"}>
      <Link to="/userpage" className={"nav-link"}> MEDLEM</Link>
        {/* <a className={"nav-link"} href={"#"}></a> */}
      </li>
      {/* <li className={"nav-item dropdown"}>
        <a className={"nav-link dropdown-toggle"} href={"#"} id={"navbarDropdown"} role={"button"} data-toggle={"dropdown"} aria-haspopup={"true"} aria-expanded={"false"}>
          Tjänster
        </a>
        <div className={"dropdown-menu"} aria-labelledby={"navbarDropdown"}>
          <a className={"dropdown-item"} href={"#"}>Action</a>
          <a className={"dropdown-item"} href={"#"}>Another action</a>
          <div className={"dropdown-divider"}></div>
          <a className={"dropdown-item"} href={"#"}>Something else here</a>
        </div>
      </li> */}

    </ul>
    
      <button className={"btn btn-outline-success my-2 my-sm-0"} type={"submit"}><Link to="/login" className={"login-btn"}> Logga in</Link></button>
  
  </div>
</nav>
</div>
)


}

export default Nav;