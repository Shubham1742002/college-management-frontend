import { useContext } from 'react';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate

function TopNavbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLogout = () => {
    logout();          // Clear auth context and localStorage
    navigate("/login"); // ✅ Redirect to login page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src="/logo.png" width="30" height="30" alt="Logo" /> StudentPortal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#profile">collage manament system</Nav.Link>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
