import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "../Login/Login";
import logo from "./disney-hotstar-logo-dark.svg";
import { useLayoutEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(false);
  const [displayLogin, setDisplayLogin] = useState("none");
  const [cookies, removeCookie] = useCookies([]);
  const [inpValSrc, setinpValSrc] = useState("");
  const [dataSrcInp, setdataSrcInp] = useState([]);

  useLayoutEffect(() => {
    if (cookies.login) {
      setisLogin(true);
    }
    document.querySelector(".searchDataContainr").style.display = "none";
  }, []);

  function noneLoginModel() {
    setDisplayLogin("none");
  }

  const LogoutFun = () => {
    setisLogin(false);
    removeCookie("userid");
    removeCookie("username");
    removeCookie("login");
  };

  const hanldeSrcChange = async (e) => {
    let searchDataContainer = document.querySelector(".searchDataContainr");
    if (!e.target.value) {
      searchDataContainer.style.display = "none";
    } else {
      searchDataContainer.style.display = "block";
    }
    setinpValSrc(e.target.value);
    let dataShows;
    let dataMovies;
    await axios
      .get("https://nervous-wrap-duck.cyclic.app/Shows")
      .then((response) => {
        let result = response.data.filter((data, index) => {
          return (
            e.target.value &&
            data &&
            data.Title &&
            data.Title.toLowerCase().includes(e.target.value)
          );
        });
        dataShows = result;
      });
    await axios
      .get("https://nervous-wrap-duck.cyclic.app/Movies")
      .then((response) => {
        let result = response.data.filter((data, index) => {
          return (
            e.target.value &&
            data &&
            data.Title &&
            data.Title.toLowerCase().includes(e.target.value)
          );
        });
        dataMovies = result;
      });
    let finalResult = [...dataShows, ...dataMovies];
    if (!finalResult[0]) {
      searchDataContainer.style.display = "none";
    }
    setdataSrcInp(finalResult);
  };

  return (
    <>
      <div className="header container-xxl">
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            {/* <button
              className="collepsBtn"
              onMouseEnter={() => {
                setAnimationClass("collapse-list-nav-anim");
                isAnimationClassVisible = false;
              }}
              onMouseLeave={() => {
                isAnimationClassVisible = true;
                setTimeout(() => {
                  if (isAnimationClassVisible) {
                    setAnimationClass("collapse-list-nav-anim-1");
                  }
                }, 1500);
              }}
            >
              <i className="fa-sharp fa-solid fa-bars line navbar-brand iconCollops"></i>
            </button>
            <div
              className={`collapse-list-nav ${AnimationClass}`}
              onMouseEnter={() => {
                isAnimationClassVisible = false;
              }}
              onMouseLeave={() => {
                isAnimationClassVisible = true;
                setTimeout(() => {
                  if (isAnimationClassVisible) {
                    setAnimationClass("collapse-list-nav-anim-1");
                  }
                }, 1500);
              }}
            >
              <Link to="/show" className="link-collapse-list-nav">
                <div
                  className="row collapse-items-nav"
                  style={{ paddingTop: "15px" }}
                >
                  <i className="col-4 fab fa-buffer text-center ps-4 pt-1"></i>
                  <p className="col-8">Shows</p>
                </div>
              </Link>
              <Link to="/movie" className="link-collapse-list-nav">
                <div className="row collapse-items-nav">
                  <i className="col-4 fas fa-language text-center ps-4 pt-1"></i>
                  <p className="col-8">Movies</p>
                </div>
              </Link>
            </div> */}
            <div className="d-flex" style={{ "flex-grow": 1 }}>
              <Link to="/" className="navbar-brand navLogoImg">
                <img alt="logo" src={logo} />
              </Link>
              <ul className="d-flex m-0 mr-auto ms-3 p-0">
                <li
                  className="d-flex align-items-center"
                  style={{ listStyle: "none" }}
                >
                  <div>
                    <Link className="text-color-a arncherInList" to="/show">
                      Shows <span className="sr-only">(current)</span>
                    </Link>
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "0px", display: "none" }}
                    >
                      <ul className="">
                        <li className="mt-1">
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="d-flex align-items-center"
                  style={{ listStyle: "none" }}
                >
                  <div>
                    <Link className="text-color-a arncherInList" to="/movie">
                      Movies
                    </Link>
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "0px", display: "none" }}
                    >
                      <ul>
                        <li className="mt-1">
                          <Link to="#">Bollywood</Link>
                        </li>
                        <li>
                          <Link to="#">Hollywood</Link>
                        </li>
                        <li>
                          <Link to="#">Tollywood</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars text-color-a"></i>
            </button>

            <div
              className="collapse navbar-collapse flex-row-reverse"
              id="navbarSupportedContent"
            >
              <form className="form-inline my-2 my-lg-0">
                <div className="search-container right-element">
                  <input
                    className="input-open"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={hanldeSrcChange}
                    value={inpValSrc}
                  />
                  <div className="searchIcon">
                    <MDBIcon fas icon="search" />
                  </div>
                  <div className="searchDataContainr rounded">
                    <div className="searchItemsRepper">
                      {dataSrcInp.map((data, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/${data.type}/${data.id}`}
                            className="text-color-a"
                          >
                            {index % 2 === 0 ? (
                              <div className="searchItem searchItem-bg-2">
                                {data.Title}
                              </div>
                            ) : (
                              <div className="searchItem">{data.Title}</div>
                            )}
                          </Link>
                        );
                      })}

                      {/* <Link to="#"><div className="searchItem">c</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link>
                      <Link to="#"><div className="searchItem">a</div></Link> */}
                    </div>
                  </div>
                </div>

                <div id="subBtn-nav" className="right-element">
                  <Link
                    to="/subscribe"
                    type="button"
                    className="subscribe-btn btn-sm"
                  >
                    Subscribe
                  </Link>
                </div>
                {!isLogin ? (
                  <div className="right-element user-profile">
                    <div
                      role="presentation"
                      className="signIn text-color-a ms-1 ps-3 pe-3"
                      onClick={() => setDisplayLogin("flex")}
                    >
                      LOGIN
                    </div>
                  </div>
                ) : (
                  <div className="dropdown right-element user-profile ms-3 ">
                    <a
                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href=""
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        height="35"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end drop-ul-user"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link
                          className="dropdown-item drop-a-user"
                          to="profile"
                        >
                          My profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item drop-a-user"
                          to="watchlist"
                        >
                          Watch list
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item drop-a-user"
                          onClick={LogoutFun}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </nav>
        </div>
      </div>
      <Login
        display={displayLogin}
        noneLogin={noneLoginModel}
        isLoginIn={() => setisLogin(true)}
        flexLogin={() => setDisplayLogin("flex")}
      />
    </>
  );
};

export default Navbar;
