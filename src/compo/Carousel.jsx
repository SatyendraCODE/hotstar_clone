import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpCommon from "../database/http-common";
import { Carousel_data } from "../database/Type";

const Carousel = () => {
  const [arrow, setArrow] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = () => {
    httpCommon
      .get(Carousel_data)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-4"
      data-mdb-ride="carousel"
    >
      <div
        className="carouselContainer"
        onMouseEnter={() => setArrow(1)}
        onMouseLeave={() => setArrow(0)}
      >
        <div className="carousel-inner">
          <div className="carousel-item active bg-Caro-main">
            <div className="height-Caro d-flex align-items-center">
              <div className="ad-info m-5">
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
                  Your one-stop destination for Comedy, Drama, Thrillers &amp;
                  more!
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

              <div className="d-flex align-items-center me-5 mt-5 mb-5">
                <div className="bg-Caro">
                  <img
                    src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-03-30/GaslightNSAtrangiReNS_desk-5217f5be-e5e5-475c-9afb-145eba8b0ad7.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Wild Landscape"
                  />
                </div>
              </div>
            </div>
          </div>
          {data.map((key, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/${key.type}/${key.id}`)}
                className="carousel-item bg-Caro"
              >
                <div className="row height-Caro ">
                  <div className="col-5 d-flex align-items-center justify-content-center h-100">
                    <div className="common-caro-left-box">
                      <h3>{key.Title}</h3>
                      <p className="detail-caro">{`${key.category[0]} - ${key.category[1]} - ${key.category[3]}`}</p>
                      <p className="detail-caro">{key.discription}</p>
                    </div>
                    {/* <div className="bgBox-caro"></div> */}
                  </div>
                  <div className="col-7">
                    <img
                      src={key.largeImgSrc}
                      className="d-block w-100"
                      alt="Error"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev btn-caro"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev"
        >
          <i
            className="fas fa-angle-left btn-caro-icon"
            style={{ opacity: arrow }}
          ></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn-caro"
          type="button"
          data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next"
        >
          <i
            className="fas fa-angle-right btn-caro-icon"
            style={{ opacity: arrow }}
          ></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
