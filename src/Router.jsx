import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Navbar from "./header/navbar";
import Subscribe from "./compo/Subscribe";
import Footer from "./footer/index";

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
    path: "/subscribe",
    element: (
      <>
        <Subscribe />
      </>
    ),
  },
]);
export default Router;
