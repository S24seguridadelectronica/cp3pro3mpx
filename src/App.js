import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar react-router-dom
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import BeneficiosCamara from './BeneficiosCamara'; 
import CardComponent from './CardComponent';
import Footer from './Footer';
import ModalComponent from './ModalComponent';
import DeteccionDeHumanos from './DeteccionDeHumanos';
import BotonDeEmergencia from './BotonDeEmergencia';
import Formulario from './Formulario'; 
import { Container, Row, Col, Alert } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // Definir los elementos del carrusel
  const carouselItems = [
    {
      src: '/logo512.png',
      alt: 'Primera Imagen',
      caption: 'Visión panorámica de 360°'
    },
    {
      src: '/logo512.png',
      alt: 'Segunda Imagen',
      caption: 'Resolución de 3 megapíxeles'
    }
  ];

  const handleFormSubmit = (data) => {
    console.log('Datos del formulario:', data);
    // Aquí puedes manejar el envío de datos al servidor o cualquier otra acción
  };

  return (
    <Router>
      <NavbarComponent />

      <Container className="py-5">
        <Alert variant="info">
          ¡Compra ahora y obtén un descuento especial en el Kit de cámaras Tenda CP3 Pro!
        </Alert>

        <header className="text-center mb-5">
          <h1 className="display-4">S24 Seguridad Electrónica 24/7</h1>
          <p className="lead">Kit de cámaras de seguridad Tenda CP3 Pro - 3 MP</p>
        </header>

        <Routes>
          {/* Ruta principal que muestra los componentes */}
          <Route 
            path="/" 
            element={
              <>
                <Row className="align-items-center">
                  <Col md={6}>
                    <CarouselComponent items={carouselItems} /> {/* Pasar los items como props */}
                  </Col>
                  <Col md={6}>
                    <CardComponent onShow={() => setShow(true)} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <BeneficiosCamara /> {/* Añadir el componente de beneficios */}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <DeteccionDeHumanos
                      imagenSrc="/logo512.png"
                      texto="La cámara detecta humanos con alta precisión, gracias a su tecnología avanzada que distingue entre personas y objetos inanimados."
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <BotonDeEmergencia
                      imagenSrc="/logo512.png"
                      texto="El botón de llamada de la cámara Tenda CP3 Pro permite a los miembros de la familia llamar fácilmente con un solo toque, garantizando comunicación rápida en caso de emergencia."
                    />
                  </Col>
                </Row>
              </>
            } 
          />

          {/* Ruta para el formulario */}
          <Route 
            path="/formulario" 
            element={
              <Row className="mt-5">
                <Col>
                  <Formulario onSubmit={handleFormSubmit} />
                </Col>
              </Row>
            } 
          />
          
          
        </Routes>

        <Footer />

        <ModalComponent show={show} handleClose={handleClose} />
      </Container>
    </Router>
  );
}

export default App;
