import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./slider_original.css";


class Slider extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./slider.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <section className="slider">
          <div className='bg-slider prevBg'></div>
          <button className="slider__control prev"><i className="fa-solid fa-chevron-left"></i></button>
          <div className='bg-slider'></div>
          <button className="slider__control next"><i className="fa-solid fa-chevron-right"></i></button>
          <Link to='#'className='ms-5 title-slider'>Star Bharat Shows</Link>
          <div className="slider__container" data-multislide="true" data-step="5">
            <div className="slider__item ms-5">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6675/1476675-v-582634b7d3fb" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/'className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1992/311992-v" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4261/1364261-v-bc200a22b55b" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4327/734327-v" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/152/152/152-v" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3569/1443569-v-9dd281391af9" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
                <div className='cardInfoContainer'>
                  <h3>title</h3>
                  <p className='category'>drama, serial</p>
                  <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                  <div>
                    <button>+ Add to wishlist</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
              </Link>
            </div>
            <div className="slider__item">
              <Link to='/' className='imgLink'>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" width="100%" />
              </Link>
            </div>
          </div>
        </section> 
      </>
    );
  }
}

export default Slider;