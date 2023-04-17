import React, { useState } from "react";
import "./login.css";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [itIsMobileNum, setItIsMobileNum] = useState(false);
  const [isPasswordInpVisible, setIsPasswordInpVisible] = useState(true);
  const [message, setMessage] = useState("hy");
  const [upUser, setUpUser] = useState({});
  const [inputValue, setInputValue] = useState("");

  const [cookies, setCookie] = useCookies([]);
  const navigate = useNavigate();

  async function checkLogin() {
    fetch(
      `https://justjayapi.000webhostapp.com/login?username=${upUser.username}&password=${upUser.password}`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.Code == 1) {
          // alert("success")
          setCookie("userid", response.Data[0].id);
          setCookie("username", response.Data[0].username);
          // console.log(cookies)
          if (response.Data[0].role_id == 1) {
            navigate("/admin");
          } else {
            // navigate("/");
            // alert("login")
            props.noneLogin();
            props.isLoginIn();
            setCookie("login", true);
            //####################### set cookie or state lift up for login ######################
          }
        } else {
          alert("invalid user");
        }
      });
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  function handleKeyDown(event, boolUser) {
    if (itIsMobileNum && boolUser && event.key === "Enter") {
      console.log("key down enter user");
      setIsPasswordInpVisible(false);
      console.log(upUser);
      setItIsMobileNum(false);
    } else if (itIsMobileNum && !boolUser && event.key === "Enter") {
      console.log("key down enter pass");
      // console.log(upUser);

      //########### here u can get password and mobile number and then call api to validate login ################

      checkLogin();
    }
  }

  const onChangeUsername = (e) => {
    if(e.target.value===""){
      setItIsMobileNum(false);
    }
    else{
      setItIsMobileNum(true);
    }
      setUpUser({ username: e.target.value });    
  };

  const validation_PassLogin = (e) => {
    setItIsMobileNum(true);
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
          <div className="card-login position-relative" onClick={(e) => e.stopPropagation()}>
            <div className="w-100">
              <div className="close" onClick={props.noneLogin}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <h5 className="title-login">Login to continue</h5>
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
