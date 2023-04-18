import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Navbar from "./header/navbar";
import Subscribe from "./compo/Subscribe/Subscribe";
import Footer from "./footer/index";
import Show from './compo/Show';
import Movie from './compo/Movie';

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
        <Show />
      </>
    ),
  },
  {
    path: "movie/:userId",
    element: (
      <>
        <Movie />
      </>
    ),
  }
]);
export default Router;
