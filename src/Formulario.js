import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormSubmitted(true);
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' }); // Resetear formulario
  };

  const handleBackToHome = () => {
    navigate('/'); // Navegar a la página principal
  };

  const handleClose = () => {
    // Manejar el cierre del formulario aquí si es necesario
    // Por ejemplo, podrías usar una función para actualizar el estado del componente padre
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="position-relative">
          <Button 
            variant="light" 
            className="position-absolute top-0 end-0 m-2" 
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span> {/* El botón de cerrar */}
          </Button>
          <h2 className="text-center mb-4">Formulario de Contacto</h2>
          {formSubmitted && (
            <Alert variant="success">
              ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Introduce tu nombre"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Introduce tu correo electrónico"
                required
              />
            </Form.Group>

            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Introduce tu número de teléfono"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
            <Button 
              variant="secondary" 
              className="ms-2" // Espaciado a la derecha del botón de enviar
              onClick={handleBackToHome}
            >
              Volver a la Página Principal
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;
