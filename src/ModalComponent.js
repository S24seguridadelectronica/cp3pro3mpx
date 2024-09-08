import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Detalles del Producto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      La CP3 Pro ofrece una visión de 360° y alta definición con 3 megapíxeles. Incluye llamada de un toque, Wi-Fi 6, detección de humanos, mascotas y llanto. Alarma de luz y sonido, y almacenamiento en tarjeta SD, nube o NVR.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
      <Button variant="primary" onClick={() => window.location.href = 'tel:+573046615865'}>
        Llama ahora
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalComponent;
