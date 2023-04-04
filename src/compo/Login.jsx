import React, { useState } from "react";
import "./login.css";
import { useLayoutEffect } from "react";
import { useEffect } from "react";

function Login(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleExit = () => {
    props.noneLogin;
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div
        className={`w-100 box-model-login `}
        style={{ display: props.display }}
        onClick={props.noneLogin}
      >
        {!isVisible && (
          <div className="card-login" onClick={(e) => e.stopPropagation()}>
            <div className="w-100">
              <div className="close" onClick={props.noneLogin}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h5 className="title-login">Login to continue</h5>
            <button className="btn-change-login" onClick={handleClick}>
              Have a Facebook/Email account?
            </button>
            <div className="or-div">or</div>
            <div className="phone-nub">
              <span className="countary-code">+91</span>
              <input
                type="text"
                name=""
                id=""
                className="ph-nu-inp"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
        )}
        {isVisible && (
          <div
            className="card-login fb"
            style={{ display: "block" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="back">
              <i
                className="fa-sharp fa-solid fa-arrow-left"
                onClick={handleClick}
              ></i>
              <div className="reg-close-login" onClick={props.noneLogin}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h5 className="sml-text">Have a Facebook/Email account?</h5>
            <div className="center">
              <input
                type="text"
                className="ph-nu-inp w-100"
                placeholder="Enter your email"
              />
              <button className="btn-con w-100">
                CONTINUE <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="or-div w-100">or</div>
              <button className="btn-fb w-100">
                {" "}
                <i className="fa-brands fa-square-facebook"></i> LOGIN WITH
                FACEBOOK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
