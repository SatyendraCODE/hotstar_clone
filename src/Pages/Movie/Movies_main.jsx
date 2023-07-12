import React, { Suspense, useLayoutEffect, useState } from "react";
import httpCommon from "../../database/http-common";
import { Movies } from "../../database/Type.js";
import { handleHoverAnimation } from "../../compo/SliderCompo/HandleHoverAnimation";
import ImageCompo from "../../compo/SliderCompo/ImageCompo";

const Movies_main = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  let isSliderVisited = true;

  useLayoutEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = () => {
    httpCommon
      .get(Movies)
      .then((response) => {
        setData(response.data);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.error(error);
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
                      }}
                      onMouseLeave={(e) => {
                        let a = e.currentTarget.parentElement.classList;
                        isSliderVisited = true;
                        setTimeout(() => {
                          if (isSliderVisited) {
                            a.remove("hoverLeft-slider");
                            a.remove("hoverRight-slider");
                            a.remove("hover-slider");
                          }
                        }, 600);
                      }}
                    >
                      <Suspense
                        key={index}
                        fallback={
                          <div className="img-fallback-lazy-slider-home">
                            <i className="fas fa-arrows-rotate"></i>
                          </div>
                        }
                      >
                        <ImageCompo
                          path={`/${key.type}/${key.id}`}
                          imgSrc={key.imgSrc}
                          title={key.Title}
                          category={key.category}
                          discription={key.discription}
                          className={""}
                        />
                      </Suspense>
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

export default Movies_main;
