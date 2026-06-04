import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { PizzasData } from '../shared/ListOfPizzas'
import PizzaCard from './PizzaCard'
import PizzaDetailModal from './PizzaDetailModal'

// TODO-PIZZAS-1: Declare two state variables using useState:
//   - show          (boolean, default: false)
//   - selectedPizza (object | null, default: null)

// TODO-PIZZAS-2: Write two event handler functions:
//   - handleShow(pizza)  → set selectedPizza = pizza, show = true
//   - handleClose()      → set show = false

// TODO-PIZZAS-3: Render a <Container> containing a <Row>.
//   Inside the Row, use PizzasData.map(...) to render each pizza in a
//   <Col md={3}> with a <PizzaCard pizza={...} onShowDetail={handleShow} />

// TODO-PIZZAS-4: After the Row, render:
//   <PizzaDetailModal show={show} pizza={selectedPizza} onClose={handleClose} />
export default function Pizzas() {
  const [show, setShow] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState(null)

  const handleShow = (pizza) => {
    setSelectedPizza(pizza)
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Container className="my-5">
      <Row className="g-4">
        {PizzasData.map((pizza) => (
          <Col md={3} key={pizza.id}>
            <PizzaCard pizza={pizza} onShowDetail={handleShow} />
          </Col>
        ))}
      </Row>

      {/* Ép React hủy bỏ phần tử khỏi DOM tree hoàn toàn khi show chuyển sang false */}
      {show && (
        <PizzaDetailModal show={show} pizza={selectedPizza} onClose={handleClose} />
      )}
    </Container>
  )
}