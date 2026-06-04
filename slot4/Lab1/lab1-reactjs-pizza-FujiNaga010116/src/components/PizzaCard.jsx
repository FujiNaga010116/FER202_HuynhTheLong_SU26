import React from 'react'
import { Card, Button } from 'react-bootstrap'

// TODO-PIZZACARD-1: Render a Card component for a single pizza
// Props:
//   - pizza   (object)   : the pizza object to display
//   - onShowDetail (function) : callback called with the pizza object when Detail button is clicked
//
// Requirements:
//   1. Render a <Card> from react-bootstrap
//   2. <Card.Img variant="top" src={pizza.image} />
//   3. <Card.Title> showing pizza.pizzaName
//   4. <Card.Text> showing pizza.category
//   5. A <Button> with label "Detail" — on click, call onShowDetail(pizza)
export default function PizzaCard({ pizza, onShowDetail }) {
  
  // Kiểm tra điều kiện phòng hờ nếu object pizza chưa kịp truyền vào
  if (!pizza) return null;

  return (
    // Yêu cầu 1: Render một thẻ <Card> từ react-bootstrap
    <Card className="h-100 shadow-sm">
      
      {/* Yêu cầu 2: Ảnh Pizza với đường dẫn src={pizza.image} */}
      <Card.Img variant="top" src={pizza.image} alt={pizza.pizzaName} />

      <Card.Body className="d-flex flex-column">
        
        {/* Yêu cầu 3: Tiêu đề hiển thị pizza.pizzaName */}
        <Card.Title className="fw-bold fs-5">
          {pizza.pizzaName}
        </Card.Title>

        {/* Yêu cầu 4: Đoạn văn bản hiển thị pizza.category */}
        <Card.Text className="text-muted small flex-grow-1">
          {pizza.category}
        </Card.Text>

        {/* Yêu cầu 5: Nút bấm có nhãn "Detail" và sự kiện onClick truyền ngược pizza ra hàm callback */}
        <Button 
          variant="primary" 
          onClick={() => onShowDetail(pizza)}
          className="mt-3 w-100"
        >
          Detail
        </Button>

      </Card.Body>
    </Card>
  )
}