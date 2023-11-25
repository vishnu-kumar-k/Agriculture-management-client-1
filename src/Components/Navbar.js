import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { Auth, jsonwebtoken } from "../Atom/Atom";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const [user, setUser] = useRecoilState(Auth);
  const [jwt, setJwt] = useRecoilState(jsonwebtoken);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({ status: false, name: "" });
    localStorage.removeItem("jwt");
    setJwt("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Navbar.Brand onClick={() => navigate("/")}>CorpPredictor</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Product Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() =>
                navigate("/product-portfolio#Enhanced-Efficiency-Fertilizers")
              }
            >
              Enhanced Efficiency Fertilizers
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Bulk Fertilisers
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Speciality Fertilisers
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Water Soluble Fertilisers
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Micronutrients Fertilizers
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Secondary Nutrients
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => navigate("/product-portfolio#Bulk-Fertilisers")}
            >
              Crop & Stage Specific Fertilizers
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Terrace Corp Portfolio"
            id="terrace-portfolio-dropdown"
          >
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Grapes Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Groundnut Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Onion Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Pomegranate Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Tomato Farming Tips
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="FarmLand Corp Portfolio"
            id="terrace-portfolio-dropdown"
          >
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Banana Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Cotton Farming Tips
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Soybean Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Sugarcane Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Paddy Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Cocount Farming Tips
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/corp-portfolio")}>
              Maize Farming Tips
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => navigate("/#")}>Dose Calculator</Nav.Link>
          <Nav.Link onClick={() => navigate("/#")}>Locate A Retailer</Nav.Link>
          <Nav.Link onClick={() => navigate("/aboutus")}>About Us</Nav.Link>
          <Nav.Link onClick={() => navigate("/contactus")}>Contact Us</Nav.Link>
        </Nav>
        <Nav>
          {user.status ? (
            <>
              <Nav.Link>{user.name}</Nav.Link>
              <Nav.Link onClick={()=>navigate('/dashboard')}>DashBoard</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
              <Nav.Link onClick={() => navigate("/register")}>Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
