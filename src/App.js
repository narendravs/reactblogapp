
import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Sign from './pages/Sign';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";


const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/posts/:id',
        element:<Single/>
      },
      {
        path: '/write',
        element:<Write/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/sign",
    element: <Sign/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);



function App() {
  return (
    <div className="app">
      <div className="container">
    <RouterProvider router={router} />
      </div>
      </div>
    
  );
}

export default App;
