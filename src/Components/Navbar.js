import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { Auth, jsonwebtoken } from '../Atom/Atom';
import { useNavigate } from 'react-router-dom';

function Navbars() {
  const [user, setUser] = useRecoilState(Auth);
  const [jwt, setJwt] = useRecoilState(jsonwebtoken);
  const navigate = useNavigate();
  
  const handleLogout = (e) => {
    e.preventDefault();
    setUser({ status: false, name: '' });
    localStorage.removeItem('jwt');
    setJwt('');
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CorpPredictor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link  onClick={()=>navigate("/predictcorp")}>Predict Crop</Nav.Link>
          </Nav>
          <Nav>
            {user.status ? (
              <>
                <Nav.Link>{user.name}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                <Nav.Link onClick={() => navigate('/register')}>Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
