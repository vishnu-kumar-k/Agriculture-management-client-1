import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { Auth, Load, Plant, Portfolio, jsonwebtoken } from "../Atom/Atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../Axios/Axios";
import { CiLogin } from "react-icons/ci";
import { GoSignIn } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
function Navbars() {
  const [user, setUser] = useRecoilState(Auth);
  const [jwt, setJwt] = useRecoilState(jsonwebtoken);
  const [loading, setLoading] = useRecoilState(Load);
  const [portfolio, setPortfolio] = useRecoilState(Portfolio);
  const [plant, setPlant] = useRecoilState(Plant);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    // e.preventDefault();
    setUser({ status: false, name: "" });
    localStorage.removeItem("jwt");
    setJwt("");
    navigate("/");
  };
  useEffect(() => {
    setLoading(true);
    axios
      .post("/verify", { jwt })
      .then((result) => {
        if (result.data.status) {
          setUser({ status: true, name: result.data.name, id: result.data.id });
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? null : (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Navbar.Brand onClick={() => navigate("/")}>
            CropPredictor
          </Navbar.Brand>
          {user.status ? (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown
                    title="Product Portfolio"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(1);
                        navigate(
                          "/product-portfolio#Enhanced-Efficiency-Fertilizers"
                        );
                      }}
                    >
                      Enhanced Efficiency Fertilizers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(2);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Bulk Fertilisers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(3);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Speciality Fertilisers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(4);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Water Soluble Fertilisers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(5);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Micronutrients Fertilizers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(6);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Secondary Nutrients
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPortfolio(7);
                        navigate("/product-portfolio#Bulk-Fertilisers");
                      }}
                    >
                      Crop & Stage Specific Fertilizers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Terrace Crop Portfolio"
                    id="terrace-portfolio-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(1);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Grapes Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(2);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Groundnut Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(3);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Onion Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(4);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Pomegranate Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(5);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Tomato Farming Tips
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="FarmLand Crop Portfolio"
                    id="terrace-portfolio-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(6);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Banana Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(7);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Cotton Farming Tips
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(8);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Soybean Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(9);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Sugarcane Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(10);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Paddy Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(11);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Cocount Farming Tips
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        setPlant(12);
                        navigate("/corp-portfolio");
                      }}
                    >
                      Maize Farming Tips
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={() => navigate("/corpsuggester")}>
                    Crop Suggester
                  </Nav.Link>

                  <Nav.Link onClick={() => navigate("/aboutus")}>
                    About Us
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/contactus")}>
                    Feedback
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>{user.name}</Nav.Link>
                  <Nav.Link onClick={() => navigate("/dashboard")}>
                    DashBoard
                    <FaRegUserCircle />
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                    <LuLogOut />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Nav className="right ml-auto">
                <Nav.Link onClick={() => navigate("/login")}>
                  Login
                  <CiLogin />
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/register")}>
                  Sign Up
                  <GoSignIn />
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar>
      )}
    </>
  );
}

export default Navbars;
