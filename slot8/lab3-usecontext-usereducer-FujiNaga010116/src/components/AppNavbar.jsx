// src/components/AppNavbar.jsx
import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';

function AppNavbar() {
  const { state, dispatch } = useAuth();
  const { user } = state;

  if (!user) return null;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AuthApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3">
            Signed in as: <span className="text-white fw-bold">{user.name}</span>
          </Navbar.Text>
          <Button variant="outline-light" onClick={() => dispatch({ type: 'LOGOUT' })}>
            Đăng xuất
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;