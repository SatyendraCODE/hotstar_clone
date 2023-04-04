import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./navbar.css";
import { Link } from "react-router-dom";
import Login from "../compo/Login";

const Navbar = () => {
  const [AnimationClass, setAnimationClass] = useState('');
  const [displayLogin, setDisplayLogin] = useState('none');
  return (
    <>
      <div className="header">
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg navbar-light container-fluid">
            <button className="collepsBtn" onMouseEnter={()=> setAnimationClass('collapse-list-nav-anim')} onMouseLeave={()=>setTimeout(()=>setAnimationClass('collapse-list-nav-anim-1'), 2000) }>
              <i className="fa-sharp fa-solid fa-bars line navbar-brand iconCollops"></i>
            </button>
            <div className={`collapse-list-nav ${AnimationClass}`} >
              <div className="row collapse-items-nav" style={{ "paddingTop": "15px"}}>
                <i className="col-4 fab fa-buffer text-center ps-4"></i>
                <p className="col-8">Channels</p>
              </div>
              <div className="row collapse-items-nav">
                <i className="col-4 fas fa-language text-center ps-4"></i>
                <p className="col-8">Languages</p>
              </div>
              <div className="row collapse-items-nav">
                <i className="col-4 fas fa-star-half-stroke text-center ps-4"></i>
                <p className="col-8">Genres</p>
              </div>
            </div>

            <img
              className="navbar-brand navLogoImg"
              src="./disney-hotstar-logo-dark.svg"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link color-w arncherInList" href="#">
                    TV <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-w arncherInList" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link  color-w arncherInList" href="#">
                    Sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  color-w arncherInList" href="#">
                    Disney+
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  color-w arncherInList" href="#">
                    <img
                      className="kidLogo"
                      src="./4aa70ede8904e16b7630300c09219c8e.svg"
                    />
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="search-container right-element">
                  <input
                    className="input-open"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="searchIcon">
                    <MDBIcon fas icon="search" />
                  </div>
                </div>
                <div className="right-element">
                  <Link to="subscribe" type="button" className="subscribe-btn btn-sm">
                    Subscribe
                  </Link>
                </div>
                <div className="right-element user-profile">
                  <div role="presentation" className="signIn" onClick={()=>setDisplayLogin('flex')}>
                    LOGIN
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <Login display={displayLogin} noneLogin={()=> setDisplayLogin('none')} flexLogin={()=> setDisplayLogin('flex')}/>
    </>
  );
};

export default Navbar;
