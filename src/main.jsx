import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home'
import Locations from './pages/locations/locations'
import Episodes from './pages/episode/episodes'
import Characters from './pages/characters/characters'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
