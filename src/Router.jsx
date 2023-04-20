import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import Navbar from "./header/navbar";
import Subscribe from "./Pages/Subscribe/index";
import Footer from "./footer/index";
import Show from './Pages/Show';
import Movie from './Pages/MoviePage';

import ScrollToTop from "./compo/ScrollToTop";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer/>
      </>
    ),
  },
  {
    path: "subscribe",
    element: (
      <>
        <Subscribe />
      </>
    ),
  },
  {
    path: "show/:userId",
    element: (
      <>
      <ScrollToTop />
        <Show />
        <Footer />
      </>
    ),
  },
  {
    path: "movie/:userId",
    element: (
      <>
      <ScrollToTop />
        <Movie />
        <Footer />
      </>
    ),
  }
]);
export default Router;
