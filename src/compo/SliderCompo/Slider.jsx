import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./slider.css";
import { Suspense } from "react";

const ImageCompo = React.lazy(() => import("./ImageCompo"));

class Slider extends Component {
  render() {
    return (
      <>
        <section className="slider">
          <div className="bg-slider prevBg"></div>
          <button className="slider__control prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="bg-slider"></div>
          <button className="slider__control next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <Link to="#" className="ms-5 title-slider">
            {this.props.title}
          </Link>

          <div
            className="slider__container"
            data-multislide="true"
            data-step="5"
          >
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                classN="ms-5"
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6675/1476675-v-582634b7d3fb"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1992/311992-v"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4261/1364261-v-bc200a22b55b"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4327/734327-v"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/152/152/152-v"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3569/1443569-v-9dd281391af9"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i class="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5"
                title="title 1"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
          </div>
        </section>
      </>
    );
  }
}

export default Slider;
