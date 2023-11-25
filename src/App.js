import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Container } from "react-bootstrap";
import Navbars from "./Components/Navbar";
import CropPredictionForm from "./Pages/CorpPredictionForm";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import PlantTips from "./Pages/PlantTips";
import ProductPortfolio from "./Pages/Product-Portfolio";
import DashBoard from "./Pages/DashBoard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element:<Container fluid> <Home /></Container>,
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/predictcorp",
      element:<><Navbars/><CropPredictionForm /></>
    },
    {
      path:"/contactus",
      element:<><Navbars/><ContactUs /></>
    },
    {
      path:"/aboutus",
      element:<><Navbars/><AboutUs /></>
    },
    {
      path:'/corp-portfolio',
      element:<Container fluid><Navbars /><PlantTips /></Container>
    },
    {
      path:'/product-portfolio',
      element:<Container fluid><Navbars /><ProductPortfolio/></Container>
    },
    {
      path:'/dashboard',
      element:<Container fluid><Navbars /><DashBoard /></Container>
    }
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
