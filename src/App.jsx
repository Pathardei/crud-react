import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './pages/Route';

const App = () => {

  return <RouterProvider router={myRouter}></RouterProvider>;

    
  
};

export default App;