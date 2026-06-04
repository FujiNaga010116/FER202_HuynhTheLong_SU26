import React, { useState } from 'react';
import { Card, Container, Row, Col, Badge, Button } from 'react-bootstrap';

// Gọi đúng đường dẫn nhảy ra ngoài thư mục components để vào thư mục data
import { pizzaData } from '../data/pizzaData'; 

import MyModal from './MyModal';

function PizzaList() {

    // useState để mở/đóng modal
    const [show, setShow] = useState(false);

    // Lưu pizza được chọn
    const [selectedPizza, setSelectedPizza] = useState(null);

    // Đóng modal
    const handleClose = () => setShow(false);

    // Mở modal và truyền pizza vào
    const handleShow = (pizza) => {
        setSelectedPizza(pizza);
        setShow(true);
    };

    return (
        <Container className="my-5">

            <h2 className="text-center mb-4 fw-bold text-uppercase">
                Our Pizza Menu
            </h2>

            {/* Tạo lưới hiển thị */}
            <Row xs={1} md={2} lg={4} className="g-4">

                {pizzaData.map((pizza) => (

                    <Col key={pizza.id}>

                        <Card className="h-100 shadow-sm position-relative">

                            {/* Tag */}
                            {pizza.tag && (
                                <Badge
                                    bg={pizza.tag === 'Sale' ? 'danger' : 'success'}
                                    className="position-absolute top-0 start-0 m-2"
                                    style={{ zIndex: 1 }}
                                >
                                    {pizza.tag}
                                </Badge>
                            )}

                            {/* Ảnh */}
                            <Card.Img
                                variant="top"
                                src={pizza.imageSrc}
                                alt={pizza.name}
                                style={{ height: '180px', objectFit: 'cover' }}
                            />

                            {/* Nội dung */}
                            <Card.Body className="d-flex flex-column">

                                <Card.Title className="fs-5 fw-bold">
                                    {pizza.name}
                                </Card.Title>

                                <Card.Text className="text-muted small flex-grow-1">
                                    {pizza.description}
                                </Card.Text>

                                {/* Giá */}
                                <div className="mt-2 pt-2 border-top">

                                    <div className="d-flex align-items-center gap-2">

                                        <span className="fs-5 fw-bold text-danger">
                                            {pizza.newPrice}
                                        </span>

                                        {pizza.oldPrice && (
                                            <span className="text-decoration-line-through text-muted small">
                                                {pizza.oldPrice}
                                            </span>
                                        )}

                                    </div>

                                </div>

                                {/* BUTTON */}
                                <Button
                                    variant="dark"
                                    className="mt-3"
                                    onClick={() => handleShow(pizza)}
                                >
                                    View Details
                                </Button>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

            {/* MODAL */}
            <MyModal
                show={show}
                handleClose={handleClose}
                pizza={selectedPizza}
            />

        </Container>
    );
}

export default PizzaList;