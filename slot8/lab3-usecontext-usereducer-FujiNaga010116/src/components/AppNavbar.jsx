import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';

function AppNavbar() {
  const { state, dispatch } = useAuth();
  const { user } = state;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Auth App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3 text-white">
            {user?.name}
          </Navbar.Text>
          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;