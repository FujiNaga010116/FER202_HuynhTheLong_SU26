import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import Ex01_BasicCounter from './pages/Ex01_BasicCounter'
import Ex02_CounterWithStep from './pages/Ex02_CounterWithStep'
import Ex03_TodoList from './pages/Ex03_TodoList'
import Ex04_ShoppingCart from './pages/Ex04_ShoppingCart'
import Ex05_FormValidation from './pages/Ex05_FormValidation'
import Home from './Home'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            useReducer
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/ex01">
                Bài 1 – Counter
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ex02">
                Bài 2 – Step
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ex03">
                Bài 3 – Todo
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ex04">
                Bài 4 – Cart
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ex05">
                Bài 5 – Form
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-4">
        <Routes>

          {/* Mặc định mở Ex05 */}
          <Route
            path="/"
            element={<Ex05_FormValidation />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/ex01"
            element={<Ex01_BasicCounter />}
          />

          <Route
            path="/ex02"
            element={<Ex02_CounterWithStep />}
          />

          <Route
            path="/ex03"
            element={<Ex03_TodoList />}
          />

          <Route
            path="/ex04"
            element={<Ex04_ShoppingCart />}
          />

          <Route
            path="/ex05"
            element={<Ex05_FormValidation />}
          />

        </Routes>
      </Container>
    </BrowserRouter>
  )
}