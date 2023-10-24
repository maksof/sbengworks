import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.scss';
import Router from './Router';

function App() {


  return (
    <>
     <RouterProvider router={createBrowserRouter(Router)} />
    </>
  )
}

export default App
