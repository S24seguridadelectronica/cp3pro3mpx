import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';

const BotonDeEmergencia = ({ imagenSrc, texto }) => {
  return (
    <Card className="mb-4">
      <Row className="align-items-center">
        <Col md={6}>
          <Card.Body>
            <Card.Title>Botón de Emergencia</Card.Title>
            <Card.Text>
              {texto}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={6}>
          <Image
            src={imagenSrc}
            alt="Botón de Emergencia"
            fluid
            className="w-100"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default BotonDeEmergencia;
