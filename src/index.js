import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import {RouterProvider} from "react-router-dom";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Router} />
  </>
);
