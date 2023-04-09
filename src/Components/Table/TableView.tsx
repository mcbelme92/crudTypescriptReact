import { ButtonHTMLAttributes } from "react";
import { Card } from "react-bootstrap";
//FIARJSE SIEMPRE DE LA DEPENDENCIA DONDE SE EXTRAE UN BOTON
//instalar con sus respectivos types
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { taskData } from "../../data";
export const TableView = () => {
  return (
    <div className="container">
      <Card className="text-center">
        <Card.Header>nAME</Card.Header>
        <Card.Body>EDAD - COLOR</Card.Body>
        <Card.Footer className="text-muted">COLOR</Card.Footer>
        <Button variant="primary">Volver </Button>
      </Card>
    </div>
  );
};
