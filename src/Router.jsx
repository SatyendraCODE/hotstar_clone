import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Navbar from "./header/navbar";
import Subscribe from "./compo/Subscribe/Subscribe";
import Footer from "./footer/index";
import Series from './compo/Series.jsx'

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
    path: "series/gumhekisikepyarme",
    element: (
      <>
        <Series />
      </>
    ),
  },
]);
export default Router;
