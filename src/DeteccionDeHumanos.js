import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';

const DeteccionDeHumanos = ({ imagenSrc, texto }) => {
  return (
    <Card className="mb-4">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={imagenSrc}
            alt="Detección de Humanos"
            fluid
            className="w-100"
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>Detección de Humanos</Card.Title>
            <Card.Text>{texto}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default DeteccionDeHumanos;
