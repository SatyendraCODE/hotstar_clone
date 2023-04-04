import {
    createBrowserRouter,
  } from "react-router-dom";
import App from './App';
import Subscribe from "./compo/Subscribe";

const Router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
      <App/>
      </>,
    },
    {
      path: "/subscribe",
      element: 
      <>
      <Subscribe/>
      </>,
    },
  ]);
  export default Router;