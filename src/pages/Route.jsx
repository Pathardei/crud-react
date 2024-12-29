// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./Layout";
// import Signup from "./Signup";
// import Login from "./Login";
// import Contacts from "./Contacts";
// import Home from "./Home";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home=lazy(()=>import("./Home"));
const Contacts=lazy(()=>import("./Contacts"));
const Signup=lazy(()=>import("./Signup"));
const Login=lazy(()=>import("./Login"));
const Layout=lazy(()=>import("./Layout"));
 


export let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
