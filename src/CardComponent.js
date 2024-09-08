import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ onShow }) => (
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src="/logo512.png" />
    <Card.Body>
      <Card.Title>Cámara Tenda CP3 Pro</Card.Title>
      <Card.Text>
        Cámara panorámica de 3 MP con visión de 360°, Wi-Fi 6, detección inteligente, y más.
      </Card.Text>
      <Button variant="success" className="mt-4" onClick={() => window.location.href = 'tel:+573046615865'}>
        Llama ahora: 3046615865
      </Button>
    </Card.Body>
  </Card>
);

export default CardComponent;
