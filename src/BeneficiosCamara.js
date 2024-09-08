import React from 'react';
import { Card } from 'react-bootstrap';
import BotonFormulario from './BotonFormulario'; // Importar el botón


const BeneficiosCamara = () => {
  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>Beneficios de la Cámara Tenda CP3 Pro</Card.Title>
        <Card.Text>
          <ul>
            <li>Visión panorámica de 360° para una cobertura completa.</li>
            <li>Resolución de 3 megapíxeles para imágenes nítidas y detalladas.</li>
            <li>Wi-Fi 6 para una conexión rápida y estable.</li>
            <li>Detección inteligente de humanos, mascotas y sonidos.</li>
            <li>Alarma de luz y sonido para una respuesta rápida.</li>
            <li>Almacenamiento en tarjeta SD, nube o NVR para flexibilidad.</li>
          </ul>
        </Card.Text>
        <BotonFormulario /> {/* Incluir el botón */}
      </Card.Body>
    </Card>
  );
};

export default BeneficiosCamara;
