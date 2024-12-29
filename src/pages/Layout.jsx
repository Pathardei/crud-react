import React, { Suspense } from "react";
import Navbar from"../components/Navbar"
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
        <Navbar /> 
       <Suspense  fallback={<h1>loaded</h1>}>

        <Outlet/>
       </Suspense>
    </div>
  )
}

export default Layout