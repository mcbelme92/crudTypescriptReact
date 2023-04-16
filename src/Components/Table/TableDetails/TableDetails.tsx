import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useApiData } from "../../../hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TableDetails = () => {
  const { id } = useParams();
  const idDataNumber = Number(id);
  const [formulario, setformulario] = useState({
    id: 0,
    name: "",
    age: 0,
    color: "",
    address: "",
  });

  const { data } = useApiData(formulario);

  const dataPerKey = data?.filter((i) => i?.id === idDataNumber);

  return (
    <div className="form">
      {dataPerKey?.map((i) => (
        <Card className="text-center">
          <Card.Header>{i.name} </Card.Header>
          <Card.Body>{i.age}</Card.Body>
          <Card.Footer className="text-center">{i.color}</Card.Footer>
          <Link to={"/"}>
            <Button variant="primary">Volver </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};
