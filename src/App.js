import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/register",
      element:<Register />
    }
  ]);
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
