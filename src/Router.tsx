import { RouteObject } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
function Router() {
  return [
    {
    	path: '',
    	element:<Layout />,
    	children: [
    		{
    			path: '',
    			element: <Home />,
    		},
    	],
    },
  ] as RouteObject[];
}

export default Router();