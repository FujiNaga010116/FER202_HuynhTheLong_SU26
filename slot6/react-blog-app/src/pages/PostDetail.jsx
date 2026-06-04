// src/pages/PostDetail.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { posts } from '../data/posts';

function PostDetail() {
  const { id } = useParams(); // Lấy :id từ URL động
  const navigate = useNavigate();

  // Tìm bài viết theo id (ép kiểu vì useParams trả về String)
  const post = posts.find(p => p.id === Number(id));

  // Xác định bài viết trước và bài viết sau
  const prevPost = posts.find(p => p.id === Number(id) - 1);
  const nextPost = posts.find(p => p.id === Number(id) + 1);

  // Trường hợp nhập sai ID hoặc không tìm thấy bài viết
  if (!post) {
    return (
      <Container className="py-5 text-center">
        <Alert variant='warning'>
          <Alert.Heading>Không tìm thấy bài viết!</Alert.Heading>
          <p>Bài viết với id={id} không tồn tại.</p>
          <Button onClick={() => navigate('/posts')} variant='warning'>
            ← Về danh sách
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4" style={{ maxWidth: 760 }}>
      {/* Nút quay lại trang trước */}
      <Button variant='outline-secondary' size='sm' onClick={() => navigate(-1)} className='mb-3'>
        ← Quay lại
      </Button>

      {/* Nội dung chi tiết */}
      <Card className="shadow-sm">
        <Card.Body className="p-4">
          <div className='d-flex gap-2 mb-3'>
            <Badge bg='primary'>{post.category}</Badge>
            {post.tags.map(tag => (
              <Badge key={tag} bg='secondary' className='fw-normal'>#{tag}</Badge>
            ))}
          </div>

          <h2 className='mb-2'>{post.title}</h2>
          
          <p className='text-muted small mb-4'>
            ✍️ {post.author} &nbsp;|&nbsp; 📅 {post.date}
          </p>

          <p style={{ lineHeight: 1.8 }}>{post.body}</p>
        </Card.Body>
      </Card>

      {/* Điều hướng bài trước / bài sau */}
      <Row className='mt-4'>
        <Col className='text-start'>
          {prevPost && (
            <Button as={Link} to={`/posts/${prevPost.id}`} variant='outline-primary' size='sm'>
              ← {prevPost.title}
            </Button>
          )}
        </Col>
        <Col className='text-end'>
          {nextPost && (
            <Button as={Link} to={`/posts/${nextPost.id}`} variant='outline-primary' size='sm'>
              {nextPost.title} →
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;