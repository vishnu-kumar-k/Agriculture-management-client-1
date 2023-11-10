import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Container } from "react-bootstrap";
import Navbars from "./Components/Navbar";
import CropPredictionForm from "./Pages/CorpPredictionForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element:<Container> <Home /></Container>,
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/predictcorp",
      element:<><Navbars/><CropPredictionForm /></>
    }
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
