import React, { FC, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Task, User } from "../../interface";
import { Link } from "react-router-dom";

interface Props {
  //Si se requiere el [] para que identifique es que es un array
  data: Task[];
}

export const TableRender: FC<Props> = ({ data }: Props) => {
  const [formulario, setFormulario] = useState(data);

  const getDeleteUserArr = (name: string): void => {
    setFormulario(formulario.filter((item) => item.name !== name));
  };
  /* console.log(formulario); */
  return (
    <div className="container">
      <div className="py-0">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Color</th>
              <th>Direccion</th>
              <th style={{ textAlign: "center" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {formulario.map((tarea) => (
              <tr key={tarea.name}>
                <td>{tarea.id}</td>
                <td>{tarea.name}</td>
                <td>{tarea.age}</td>
                <td>{tarea.color} </td>
                <td>{tarea.address} </td>
                <td style={{ textAlign: "center" }}>
                  <Button variant="primary" className="mx-2">
                    Visualizar
                  </Button>
                  <Link to={`/edit/${tarea.id}`}>
                    <Button className="mx-2" variant="light">
                      Editar
                    </Button>
                  </Link>
                  <Button
                    onClick={() => getDeleteUserArr(tarea.name)}
                    className="mx-2"
                    variant="danger"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
