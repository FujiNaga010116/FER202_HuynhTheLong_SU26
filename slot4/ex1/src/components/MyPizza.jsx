import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
function MyPizza({pizza}) {
    return (
        <div>
            {/* Hiển thị thông tin ID, Name, tên loại pizza, description, 
            hình ảnh pizza, giá cũ, giá giảm, tag trong 1 Card React-bootstrap, 
            chứa trong container react-bootstrap , có Row, Col */ }
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pizza.imageSrc} />
                            <Card.Body>
                                <Card.Title>{pizza.name}</Card.Title>
                                <Card.Text>
                                    ID: {pizza.id} <br />
                                    Description: {pizza.description} <br />
                                    Old Price: {pizza.oldPrice} <br />
                                    New Price: {pizza.newPrice} <br />
                                    Tag: {pizza.tag}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MyPizza;