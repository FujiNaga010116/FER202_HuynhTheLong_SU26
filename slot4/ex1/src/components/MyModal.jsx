import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({ show, handleClose, pizza }) {

  if (!pizza) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      
      <Modal.Header closeButton>
        {/* Đổi pizza.pizzaName thành pizza.name */}
        <Modal.Title className="fw-bold">{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Đổi pizza.image thành pizza.imageSrc */}
        <img
          src={pizza.imageSrc}
          alt={pizza.name}
          className="img-fluid mb-3 rounded"
          style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }}
        />

        <p><strong>Description:</strong> {pizza.description}</p>

        {/* Đổi pizza.price thành pizza.newPrice và bỏ dấu $ ở ngoài vì trong data có sẵn rồi */}
        <p>
          <strong>Price:</strong>{' '}
          <span className="text-danger fw-bold fs-5">{pizza.newPrice}</span>
          {pizza.oldPrice && (
            <span className="text-decoration-line-through text-muted small ms-2">
              {pizza.oldPrice}
            </span>
          )}
        </p>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>

    </Modal>
  );
}

export default MyModal;