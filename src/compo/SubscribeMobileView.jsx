import React from "react";
import { Link } from "react-router-dom";

const SubscribeMobileView = () => {
  return (
    <div id="subscribePage" className="p-2 rounded">
      <div className="row justify-content-around">
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <div
            className="ad-info p-3 m-4 rounded"
            style={{
              "backdrop-filter": "blur(2px)",
              "box-shadow": " 0px 0px 15px rgb(0, 0, 0)",
              background: "rgba(0,0,0,.7)",
            }}
          >
            <div className="info-unit">
              <div className="header-unit d-flex">
                <div className="ad-logo d-flex align-items-center">
                  <img
                    src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
                    alt="logo"
                    width={"45px"}
                  />
                </div>
                <div
                  className="header-unit-wrapper ps-2"
                  style={{ fontSize: "14px" }}
                >
                  <div className="title-unit" style={{ color: "white" }}>
                    <span className="title "> Disney+ Hotstar </span>
                  </div>
                  <div
                    className="ellipsize sub-title "
                    style={{ fontSize: "13px" }}
                  >
                    {" "}
                    Binge-worthy Watchlist{" "}
                  </div>
                </div>
              </div>
            </div>
            <p
              className="info-desc mt-3"
              style={{ color: "#ffffff73", fontSize: "14px" }}
            >
              Your one-stop destination for Comedy, Drama, Thrillers &amp; more!
            </p>
            <Link
              to="/subscribe"
              type="button"
              className="btn btn-outline-primary w-100"
              data-mdb-ripple-color="dark"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center text-center">
          <h1 className="text-color-p p-2 p-md-0" style={{fontSize:"50px"}}>SUBSCRIBE NOW</h1>
        </div>
      </div>
    </div>
  );
};

export default SubscribeMobileView;
