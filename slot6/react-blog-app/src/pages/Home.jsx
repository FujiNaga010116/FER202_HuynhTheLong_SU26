// src/pages/Home.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

function Home() {
  // Lấy 2 bài viết mới nhất để hiển thị làm bài viết nổi bật
  const latestPosts = posts.slice(0, 2);

  // Tính toán nhanh một số thông số thống kê để hiển thị thêm dữ liệu sinh động
  const totalPosts = posts.length;
  const uniqueCategories = [...new Set(posts.map(p => p.category))].length;
  const uniqueAuthors = [...new Set(posts.map(p => p.author))].length;

  return (
    <Container className="py-5">
      {/* 🚀 1. HERO SECTION: Thiết kế với màu Gradient hiện đại */}
      <div 
        className="p-5 mb-5 text-white rounded-5 shadow" 
        style={{
          background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)'
        }}
      >
        <Row className="align-items-center py-3">
          <Col lg={8} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">📝 Chào mừng tới React Blog</h1>
            <p className="lead fs-5 opacity-90 mb-4">
              Khám phá không gian chia sẻ kiến thức chuyên sâu về React, Hooks, các thư viện UI 
              và xu hướng lập trình Frontend mới nhất.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Button as={Link} to="/posts" variant="light" size="lg" className="fw-semibold px-4 shadow-sm">
                Khám phá bài viết
              </Button>
              <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-4">
                Tìm hiểu thêm
              </Button>
            </div>
          </Col>
          
          {/* 📊 2. STATS COUNTER: Hiển thị số liệu thống kê dự án trực quan */}
          <Col lg={4} className="mt-4 mt-lg-0">
            <Row className="g-3 text-center text-dark">
              <Col xs={6}>
                <div className="bg-light p-3 rounded-4 shadow-sm">
                  <h3 className="fw-bold text-primary mb-1">{totalPosts}</h3>
                  <small className="text-muted fw-semibold">Bài viết</small>
                </div>
              </Col>
              <Col xs={6}>
                <div className="bg-light p-3 rounded-4 shadow-sm">
                  <h3 className="fw-bold text-success mb-1">{uniqueCategories}</h3>
                  <small className="text-muted fw-semibold">Chủ đề</small>
                </div>
              </Col>
              <Col xs={12}>
                <div className="bg-light p-3 rounded-4 shadow-sm">
                  <h3 className="fw-bold text-info mb-1">{uniqueAuthors}</h3>
                  <small className="text-muted fw-semibold">Tác giả đóng góp</small>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* 🌟 3. FEATURED POSTS: Khu vực bài viết mới và nổi bật */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-dark m-0">🔥 Bài viết mới nhất</h3>
        <Link to="/posts" className="text-primary text-decoration-none fw-semibold">
          Xem tất cả ({totalPosts}) →
        </Link>
      </div>

      <Row className="g-4">
        {latestPosts.map(post => (
          <Col md={6} key={post.id}>
            <Card 
              className="h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden"
              style={{
                transition: 'all 0.3s ease',
                backgroundColor: '#fff'
              }}
              // Thêm hiệu ứng hover nhẹ bằng CSS inline hoặc class của Bootstrap
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 .5rem 1.5rem rgba(0,0,0,.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
              }}
            >
              <Card.Body className="p-4 d-flex flex-column">
                {/* Category & Date */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg="primary" className="px-2.5 py-2 rounded-3 fw-semibold">
                    {post.category}
                  </Badge>
                  <small className="text-muted">📅 {post.date}</small>
                </div>

                {/* Title */}
                <Card.Title className="fw-bold fs-4 mb-2 text-dark">
                  {post.title}
                </Card.Title>

                {/* Author */}
                <p className="text-muted small mb-3">✍️ Tác giả: <span className="fw-semibold">{post.author}</span></p>

                {/* Description Preview */}
                <Card.Text className="text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {post.body.substring(0, 110)}...
                </Card.Text>

                {/* Footer of Card: Tags & Button */}
                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-light">
                  <div className="d-flex gap-1 flex-wrap">
                    {post.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} bg="secondary" className="bg-opacity-10 text-secondary fw-normal">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button as={Link} to={`/posts/${post.id}`} variant="outline-primary" size="sm" className="rounded-3 px-3">
                    Đọc tiếp →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;