// src/components/RegistrationForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';

function RegistrationForm() {
  const navigate = useNavigate();

  // State quyết định chế độ: true = Đăng nhập, false = Đăng ký
  const [isLoginMode, setIsLoginMode] = useState(true);

  // State quản lý giá trị các trường input
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State quản lý lỗi hiển thị
  const [errors, setErrors] = useState({});
  // State ẩn/hiện Modal thành công
  const [showModal, setShowModal] = useState(false);

  // Hàm thay đổi chế độ Đăng nhập <-> Đăng ký
  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({ username: '', email: '', password: '', confirmPassword: '' }); // Xóa trắng form khi đổi chế độ
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Hàm xử lý kiểm tra lỗi (Validation)
  const validateForm = () => {
    let newErrors = {};

    // 1. Kiểm tra Username (Cả Đăng nhập và Đăng ký đều cần)
    if (!formData.username.trim()) {
      newErrors.username = 'Tên đăng nhập không được để trống.';
    }

    // 2. Các kiểm tra chỉ áp dụng khi ở chế độ ĐĂNG KÝ
    if (!isLoginMode) {
      // Kiểm tra Email đúng định dạng
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        newErrors.email = 'Email không được để trống.';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email không đúng định dạng (Ví dụ: abc@gmail.com).';
      }

      // Kiểm tra Password mạnh (từ 6 ký tự, có hoa, thường, số, đặc biệt)
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!formData.password) {
        newErrors.password = 'Mật khẩu không được để trống.';
      } else if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'Mật khẩu phải từ 6 ký tự trở lên, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.';
      }

      // Kiểm tra Confirm Password khớp
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Vui lòng xác nhận lại mật khẩu.';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Mật khẩu xác nhận không trùng khớp.';
      }
    } else {
      // Nếu là chế độ ĐĂNG NHẬP: chỉ cần kiểm tra mật khẩu không được trống
      if (!formData.password) {
        newErrors.password = 'Mật khẩu không được để trống.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Xử lý khi Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLoginMode) {
        // Nếu Đăng nhập hợp lệ -> Cho vào thẳng trang chủ luôn, không cần hiện Modal
        navigate('/home');
      } else {
        // Nếu Đăng ký hợp lệ -> Hiện Modal thông báo thành công
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/home'); // Đăng ký xong nhấn OK sẽ vào trang chủ
  };

  return (
    <Container className="py-5" style={{ maxWidth: 500 }}>
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Header className="bg-primary text-white text-center py-3 rounded-top-4">
          <h4 className="mb-0 fw-bold">
            {isLoginMode ? '🔑 ĐĂNG NHẬP HỆ THỐNG' : '🔐 ĐĂNG KÝ TÀI KHOẢN'}
          </h4>
        </Card.Header>
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            
            {/* 1. Tên đăng nhập (Hiện ở cả 2 chế độ) */}
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="fw-semibold">Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                placeholder="Nhập tên đăng nhập của bạn..."
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            {/* 2. Địa chỉ Email (Chỉ hiện khi ĐĂNG KÝ) */}
            {!isLoginMode && (
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Địa chỉ Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Nhập email (Ví dụ: abc@gmail.com)..."
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            )}

            {/* 3. Mật khẩu (Hiện ở cả 2 chế độ) */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fw-semibold">Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Nhập mật khẩu..."
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            {/* 4. Nhập lại mật khẩu (Chỉ hiện khi ĐĂNG KÝ) */}
            {!isLoginMode && (
              <Form.Group className="mb-4" controlId="formConfirmPassword">
                <Form.Label className="fw-semibold">Xác nhận mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                  placeholder="Nhập lại mật khẩu để xác nhận..."
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
              </Form.Group>
            )}

            {/* Nút bấm hành động */}
            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit" size="lg" className="fw-semibold">
                {isLoginMode ? 'Login' : 'Register'}
              </Button>
            </div>

            {/* Lựa chọn chuyển đổi chế độ */}
            <div className="text-center mt-3">
              <span className="text-muted small">
                {isLoginMode ? 'Chưa có tài khoản hệ thống?' : 'Đã có tài khoản từ trước?'}
              </span>{' '}
              <Button 
                variant="link" 
                className="p-0 small fw-semibold text-decoration-none" 
                onClick={switchMode}
                type="button"
              >
                {isLoginMode ? 'Đăng ký ngay' : 'Đăng nhập ngay'}
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>

      {/* Modal thông báo thành công cho trường hợp Đăng ký */}
      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title>🎉 Đăng ký thành công!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <h5>Chúc mừng tài khoản <strong>{formData.username}</strong>!</h5>
          <p className="text-muted mb-0">Hệ thống đã tạo tài khoản thành công. Bấm OK để tiến vào trang chủ Blog.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal} className="px-4">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegistrationForm;