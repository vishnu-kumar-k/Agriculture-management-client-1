import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { Auth, Load, jsonwebtoken } from "../Atom/Atom";
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
  const[loading,setLoading]=useRecoilState(Load)
  const navigate = useNavigate();

  const handleLogout = (e) => {
   // e.preventDefault();
    setUser({ status: false, name: "" });
    localStorage.removeItem("jwt");
    setJwt("");
    navigate("/")
  };
  useEffect(()=>{
    setLoading(true)
    axios.post("/verify",{jwt}).then((result)=>{

      if(result.data.status)
      {
        setUser({status:true,name:result.data.name,id:result.data.id});
      }

    }).catch((err)=>console.log(err));
    setLoading(false);
  },[]);

  return (<>{loading?null:(
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  <Navbar.Brand onClick={() => navigate("/")}>CorpPredictor</Navbar.Brand>
  {user.status ? (
    <>
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
          <Nav.Link onClick={() => navigate("/corpsuggester")}>Corp Suggester</Nav.Link>
          <Nav.Link onClick={() => navigate("/#")}>Locate A Retailer</Nav.Link>
          <Nav.Link onClick={() => navigate("/aboutus")}>About Us</Nav.Link>
          <Nav.Link onClick={() => navigate("/contactus")}>Contact Us</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link>{user.name}</Nav.Link>
          <Nav.Link onClick={() => navigate('/dashboard')}>DashBoard<FaRegUserCircle /></Nav.Link>
          <Nav.Link onClick={() => {handleLogout()}}>Logout<LuLogOut /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  ) : (
    <>
      <Nav className="right ml-auto">
        <Nav.Link onClick={() => navigate("/login")}>Login<CiLogin /></Nav.Link>
        <Nav.Link onClick={() => navigate("/register")}>Sign Up<GoSignIn /></Nav.Link>
      </Nav>
    </>
  )}
</Navbar>
)}</>

     );
}

export default Navbars;
