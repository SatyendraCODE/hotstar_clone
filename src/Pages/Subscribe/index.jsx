import React, { useState } from "react";
import "./Subscribe.css";
import Header from "./headerofsub";

const Subscribe = () => {
  const [check_mark, setCheck_mark] = useState(true);
  const [check_mark_primium, setCheck_mark_primium] = useState(true);

  const [SuperTitle, setSuperTitle] = useState("highlight-title-box-sub");
  const [SuperContant, setSuperContant] = useState("highlight-contant-box-sub");
  const [SuperPrice, setSuperPrice] = useState("highlight-price-box-sub");
  const [SuperPriceColor, setSuperPriceColor] = useState(
    "highlight-price-color-box-sub"
  );

  const [PremiumTitle, setPremiumTitle] = useState("");
  const [PremiumContant, setPremiumContant] = useState("");

  const [PremiumPrice1, setPremiumPrice1] = useState("");
  const [PremiumPriceColor1, setPremiumPriceColor1] = useState("");

  const [PremiumPrice2, setPremiumPrice2] = useState("");
  const [PremiumPriceColor2, setPremiumPriceColor2] = useState("");

  const [scrollVisible, setScrollVisible] = useState(
    "scrolleble-box-mouseLeave-sub"
  );
  const [productName, setProductName] = useState("SUPER");
  const [SUPER, PRIMIUM] = ["SUPER", "PRIMIUM"];

  const setSuperTheme = () => {
    setProductName(SUPER);
    setSuperTitle((color) => (color = "highlight-title-box-sub"));
    setSuperContant((color) => (color = "highlight-contant-box-sub"));
    setSuperPrice((color) => (color = "highlight-price-box-sub"));
    setSuperPriceColor((color) => (color = "highlight-price-color-box-sub"));

    setPremiumTitle((color) => (color = ""));
    setPremiumContant((color) => (color = ""));
    setPremiumPrice1((color) => (color = ""));
    setPremiumPrice2((color) => (color = ""));
    setPremiumPriceColor1((color) => (color = ""));
    setPremiumPriceColor2((color) => (color = ""));

    setCheck_mark((c) => (c = true));
  };
  const setPrimiumTheme1 = () => {
    setProductName(PRIMIUM);
    setPremiumTitle((color) => (color = "highlight-title-box-sub"));
    setPremiumContant((color) => (color = "highlight-contant-box-sub"));
    setPremiumPrice1((color) => (color = "highlight-price-box-sub"));
    setPremiumPriceColor1((color) => (color = "highlight-price-color-box-sub"));

    setPremiumPrice2((color) => (color = ""));
    setPremiumPriceColor2((color) => (color = ""));

    setSuperTitle((color) => (color = ""));
    setSuperContant((color) => (color = ""));
    setSuperPrice((color) => (color = ""));
    setSuperPriceColor((color) => (color = ""));

    setCheck_mark_primium((c) => (c = true));
    setCheck_mark((c) => (c = false));
  };
  const setPrimiumTheme2 = () => {
    setProductName(PRIMIUM);
    setPremiumTitle((color) => (color = "highlight-title-box-sub"));
    setPremiumContant((color) => (color = "highlight-contant-box-sub"));
    setPremiumPrice2((color) => (color = "highlight-price-box-sub"));
    setPremiumPriceColor2((color) => (color = "highlight-price-color-box-sub"));

    setPremiumPrice1((color) => (color = ""));
    setPremiumPriceColor1((color) => (color = ""));

    setSuperTitle((color) => (color = ""));
    setSuperContant((color) => (color = ""));
    setSuperPrice((color) => (color = ""));
    setSuperPriceColor((color) => (color = ""));

    setCheck_mark_primium((c) => (c = false));
    setCheck_mark((c) => (c = false));
  };
  return (
    <>
      <Header />
      <div className={`container-fluid h-100 bg-sub pb-3`}>
        <h4 className="h4-title-sub">
          Subscribe to watch all content on Disney+ Hotstar
        </h4>
        <div className="box">
          <div className="row">
            <div className="col-12" style={{ "padding-right": "15px" }}>
              <div className="d-flex justify-center ">
                <div className="pt-3 pb-2" style={{ width: "60%" }}></div>
                <div
                  className={`mid text-center pt-3 pb-2 color-cell-box-sub ${SuperTitle}`}
                  style={{ width: "20%" }}
                >
                  Super
                </div>
                <div
                  className={`mid text-center pt-3 pb-2 color-cell-box-sub ${PremiumTitle}`}
                  style={{ width: "20%" }}
                >
                  Premium
                </div>
              </div>
            </div>

            <div
              className={`scrolleble-box-sub ${scrollVisible}`}
              onMouseEnter={() =>
                setScrollVisible("scrolleble-box-mouseEnter-sub")
              }
              onMouseLeave={() =>
                setScrollVisible("scrolleble-box-mouseLeave-sub")
              }
            >
              <div className="col-12 color-w">
                <div className="d-flex justify-center">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    All contect
                    <br />
                    <span className="movie">
                      Movies, live sports, TV, Specials
                    </span>
                  </div>
                  <div
                    className={`pt-2 pb-2 text-center height-box-sub color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div
                    className={`pt-2 pb-2 text-center height-box-sub color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 color-w">
                <div className="d-flex justify-center ">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    Watch on TV or Laptop
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 color-w">
                <div className="d-flex justify-center ">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    Ads free movies and shows (except sports)
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 color-w">
                <div className="d-flex justify-center ">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    Number of devices that can be logged in
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    2
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    4
                  </div>
                </div>
              </div>

              <div className="col-12 color-w">
                <div className="d-flex justify-center ">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    Max video quality
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    Full HD(1080p)
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    4K (2160p)
                  </div>
                </div>
              </div>

              <div className="col-12 color-w">
                <div className="d-flex justify-center ">
                  <div
                    className="pt-2 pb-2 border-bottom-sub"
                    style={{ width: "60%" }}
                  >
                    Max audio quality
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${SuperContant}`}
                    style={{ width: "20%" }}
                  >
                    Dolby 5.1
                  </div>
                  <div
                    className={`pt-2 pb-2  text-center color-cell-box-sub border-bottom-sub ${PremiumContant}`}
                    style={{ width: "20%" }}
                  >
                    Dolby 5.1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="plans">
            <button
              className={`plans-box color-w poi-rel me-3 ${SuperPrice}`}
              onClick={setSuperTheme}
            >
              <p className={SuperPriceColor}>Super</p>
              <p>
                <span className="vertical-up-sub">₹ </span>
                <span className="price-btn-sub">899</span>
                <span className="time-btn-sub">/Year</span>
              </p>
              <i
                className={`fa-solid fa-check poi-ab ${
                  check_mark ? "check-mark" : "check-mark-hidden"
                }`}
              ></i>
            </button>

            <button
              className={`plans-box color-w poi-rel me-3 ${PremiumPrice1}`}
              onClick={setPrimiumTheme1}
            >
              <p className={PremiumPriceColor1}>Premium</p>
              <p>
                <span className="vertical-up-sub">₹ </span>
                <span className="price-btn-sub">1499</span>
                <span className="time-btn-sub">/Year</span>
              </p>
              <i
                className={`fa-solid fa-check poi-ab ${
                  !check_mark
                    ? check_mark_primium
                      ? "check-mark"
                      : "check-mark-hidden"
                    : "check-mark-hidden"
                }`}
              ></i>
            </button>

            <button
              className={`plans-box color-w poi-rel ${PremiumPrice2}`}
              onClick={setPrimiumTheme2}
            >
              <p className={PremiumPriceColor2}>Premium</p>
              <p>
                <span className="vertical-up-sub">₹ </span>
                <span className="price-btn-sub">299</span>
                <span className="time-btn-sub">/Month</span>
              </p>
              <i
                className={`fa-solid fa-check poi-ab ${
                  !check_mark
                    ? !check_mark_primium
                      ? "check-mark"
                      : "check-mark-hidden"
                    : "check-mark-hidden"
                }`}
              ></i>
            </button>
          </div>
          <button className="w-100 btn-con mt-1 mb-4">
            <b>{`CONTINUE WITH ${productName}`} &nbsp;&nbsp;</b>
            <i
              className="fa-solid fa-chevron-right"
              style={{ fontSize: "14px" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
