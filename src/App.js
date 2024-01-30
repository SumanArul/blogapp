import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './style.css'

const Layout=()=>{
  return(
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }

  
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