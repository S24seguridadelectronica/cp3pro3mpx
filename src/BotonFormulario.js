import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BotonFormulario = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/formulario'); // Navega a la ruta del formulario
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Ir al Formulario
    </Button>
  );
};

export default BotonFormulario;
