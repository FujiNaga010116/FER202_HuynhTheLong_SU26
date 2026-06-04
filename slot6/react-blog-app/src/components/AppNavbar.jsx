// src/components/AppNavbar.jsx
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook lấy thông tin đường dẫn URL hiện tại

  // Kiểm tra xem người dùng có đang ở màn hình Đăng ký (tuyến đường gốc '/') hay không
  const isRegisterPage = location.pathname === '/';

  return (
    <Navbar bg="primary" variant="dark" expand="md" sticky="top" className="shadow-sm">
      <Container>
        {/* Nếu đang ở trang đăng ký thì click vào logo không đi đâu cả, ngược lại thì về /home */}
        <Navbar.Brand as={NavLink} to={isRegisterPage ? '#' : '/home'}>
          📝 React Blog
        </Navbar.Brand>

        {/* Chỉ hiển thị Menu và nút Đăng xuất nếu KHÔNG PHẢI đang ở trang Đăng ký */}
        {!isRegisterPage && (
          <>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className='ms-auto align-items-center gap-2'>
                <Nav.Link as={NavLink} to='/home' end>🏠 Trang chủ</Nav.Link>
                <Nav.Link as={NavLink} to='/posts'>📚 Bài viết</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>ℹ️ Giới thiệu</Nav.Link>
                
                {/* Nút bấm này giờ chỉ xuất hiện khi đã vào bên trong ứng dụng */}
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  className="ms-2 fw-semibold"
                  onClick={() => navigate('/')}
                >
                  🔒 Đăng xuất
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        )}

        {/* Nếu đang ở trang đăng ký, có thể hiển thị một dòng chữ nhỏ bên phải cho đẹp */}
        {isRegisterPage && (
          <span className="text-white-50 small fw-semibold">
            Hệ thống cấp phát tài khoản
          </span>
        )}
      </Container>
    </Navbar>
  );
}

export default AppNavbar;