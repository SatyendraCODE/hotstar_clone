import React, { useRef, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { USERS } from "../../database/Type";
import httpCommon from "../../database/http-common";

function Login(props) {
  const [isVisible, setIsVisible] = useState(false);
  const itIsMobileNum = useRef(false);
  const [isPasswordInpVisible, setIsPasswordInpVisible] = useState(true);
  const [upUser, setUpUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  async function checkLogin() {
    await httpCommon
      .get(`${USERS}?username=${upUser.username}&password=${upUser.password}`)
      .then((response) => {
        document.cookie = `userid=${response.data[0].id}`;
        document.cookie = `username=${response.data[0].username}`;
        if (response.data[0].id === 1) {
          navigate("/admin");
        } else {
          props.noneLogin();
          props.isLoginIn();
          document.cookie = `login=true`;
        }
      })
      .catch((error) => {
        alert("invalid user");
      });
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  function handleKeyDown(event, boolUser) {
    if (itIsMobileNum.current && boolUser && event.key === "Enter") {
      setIsPasswordInpVisible(false);
      itIsMobileNum.current = false;
    } else if (itIsMobileNum.current && !boolUser && event.key === "Enter") {
      //########### here u can get password and mobile number and then call api to validate login ################
      checkLogin();
    }
  }

  const onChangeUsername = (e) => {
    if (e.target.value === "") {
      itIsMobileNum.current = false;
    } else {
      itIsMobileNum.current = true;
    }
    setUpUser({ ...upUser, username: e.target.value });
  };

  const validation_PassLogin = (e) => {
    itIsMobileNum.current = true;
    setUpUser({ ...upUser, password: e.target.value });
  };
  return (
    <>
      <div
        className={`w-100 box-model-login `}
        style={{ display: props.display }}
        onClick={props.noneLogin}
      >
        {!isVisible && (
          <div
            className="card-login position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-100">
              <div className="close" onClick={props.noneLogin}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h5 className="title-login mt-2">Login to continue</h5>
            {/* if mobile number present - start */}
            {isPasswordInpVisible ? (
              <>
                <button className="btn-change-login" onClick={handleClick}>
                  Have a Facebook/Email account?
                </button>
                <div className="or-div">or</div>
                <div className="phone-nub">
                  {/* <span className="countary-code">+91</span> */}
                  <input
                    type="text"
                    name="username"
                    id=""
                    // value={inputValue}
                    className="ph-nu-inp"
                    inputMode="numeric"
                    // pattern="[0-9]*"
                    placeholder="Enter Your Username"
                    onKeyDown={(e) => handleKeyDown(e, true)}
                    onChange={onChangeUsername}
                  />
                </div>
              </>
            ) : (
              <div>
                <div className="position-absolute" style={{ top: "-20px" }}>
                  <i
                    className="fa-sharp fa-solid fa-arrow-left back-icon-login mt-5"
                    onClick={() => setIsPasswordInpVisible(true)}
                  ></i>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    value={upUser.password}
                    // value={inputValue}
                    className="ph-nu-inp w-100 ps-1 mt-4"
                    inputMode="numeric"
                    // pattern="[0-9]*"
                    placeholder="password"
                    onKeyDown={(e) => handleKeyDown(e, false)}
                    onChange={validation_PassLogin}
                  />
                </div>
              </div>
            )}
            {/* if mobile number present - end */}
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
                className="fa-sharp fa-solid fa-arrow-left back-icon-login"
                onClick={handleClick}
              ></i>
              <div className="reg-close-login" onClick={props.noneLogin}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h5 className="sml-text mt-1">Have a Facebook/Email account?</h5>
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
