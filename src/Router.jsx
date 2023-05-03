import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import Navbar from "./compo/header/Navbar";
import Subscribe from "./Pages/Subscribe/index";
import Footer from "./compo/footer/index";
import Show from "./Pages/Show/Show.jsx";
import ShowsMain from "./Pages/Show/Shows_main.jsx";
import Movie from "./Pages/Movie/Movie";
import MoviesMain from "./Pages/Movie/Movies_main";

import ScrollToTop from "./compo/ScrollToTop";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      {/* <NavTest /> */}
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/subscribe",
    element: (
      <>
        <Subscribe />
      </>
    ),
  },
  {
    path: "/show",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <ShowsMain />
        <Footer />
      </>
    )
  },
  {
    path: "/show/:userId",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Show />
        <Footer />
      </>
    ),
  },
  {
    path: "/movie",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <MoviesMain />
        <Footer />
      </>
    ),
  },
  {
    path: "/movie/:userId",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Movie />
        <Footer />
      </>
    ),
  },
]);
export default Router;
