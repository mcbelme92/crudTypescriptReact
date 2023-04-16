import React from "react";
import { Table } from "react-bootstrap";

const TableRenderF = () => {
  return {
    /* <Table striped bordered hover variant="dark">
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
            {dataEfect?.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.id}</td>
                <td>{tarea.name}</td>
                <td>{tarea.age}</td>
                <td>{tarea.color} </td>
                <td>{tarea.address} </td>
                <td style={{ textAlign: "center" }}>
                  <Link to={`/view/${tarea?.id}`}>
                    <Button variant="primary" className="mx-2">
                      Visualizar
                    </Button>
                  </Link>
                  <Link to={`/edit/${tarea?.id}`}>
                    <Button className="mx-2" variant="light">
                      Editar
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteUser(Number(tarea?.id))}
                    className="mx-2"
                    variant="danger"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>  */
  };
};

export default TableRenderF;
