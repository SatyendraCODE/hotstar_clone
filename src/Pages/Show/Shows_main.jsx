import React, { Suspense, useLayoutEffect, useState } from "react";
import httpCommon from "../../database/http-common";
import { Shows } from "../../database/Type.js";
import { handleHoverAnimation } from "../../compo/SliderCompo/HandleHoverAnimation";
// const ImageCompo = React.lazy(() =>
//   import("../../compo/SliderCompo/ImageCompo")
// );
import ImageCompo from "../../compo/SliderCompo/ImageCompo";

const Shows_main = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  let isSliderVisited = true;

  useLayoutEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = () => {
    httpCommon
      .get(Shows)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-xxl mt-4">
      <div>
        <div>
          <ul
            className="d-flex p-1 flex-wrap justify-content-center"
            style={{ gap: "10px" }}
          >
            {/* <li style={{textDecoration: "none", listStyle:"none"}} onMouseEnter={()=>console.log("mouse enter")}>hy</li> */}
            {isLoaded ? (
              <div className="img-fallback-lazy-slider-home">
                <i className="fas fa-arrows-rotate"></i>
              </div>
            ) : (
              data.map((key, index) => {
                return (
                  <li
                    className=""
                    key={index}
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      flexBasis: "150px",
                    }}
                  >
                    <div
                      className=""
                      style={{ zIndex: "10", position: "relative" }}
                      onMouseEnter={(e) => {
                        isSliderVisited = false;
                        handleHoverAnimation(e);
                        // console.log("enter");
                      }}
                      onMouseLeave={(e) => {
                        let a = e.currentTarget.parentElement.classList;
                        // e.currentTarget.parentElement.style.zIndex=10;
                        isSliderVisited = true;
                        // e.currentTarget.firstElementChild.classList.remove("hoverLeft-slider");
                        // e.currentTarget.firstElementChild.classList.remove("hover-slider");
                        setTimeout(() => {
                          if (isSliderVisited) {
                            a.remove("hoverLeft-slider");
                            a.remove("hoverRight-slider");
                            a.remove("hover-slider");
                          }
                        }, 600);
                      }}
                    >
                      <ImageCompo
                        path={`/${key.type}/${key.id}`}
                        imgSrc={key.imgSrc}
                        title={key.Title}
                        category={key.category}
                        discription={key.discription}
                        className={""}
                      />
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shows_main;
