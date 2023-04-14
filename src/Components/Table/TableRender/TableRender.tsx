import React, { FC, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Task, User, ListUsersProps } from "../../../interface";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}
interface TableRenderMockupProps {
  /* formulario: User[]; */
  users: User[];
  getDeleteUserArr?: any;
}

export const TableRender: FC<ListUsersProps> = ({ users }) => {
  //no nesecita otro useSTate ya que llega como array
  /* console.log(users); */
  const getDeleteUserArr = (id: number) => {
    /* setFormulario(formulario.filter((item) => item.id !== id)); */
  };

  return (
    <div className="container">
      <TableRenderMockup users={users} getDeleteUserArr={getDeleteUserArr} />
    </div>
  );
};

const TableRenderMockup: FC<TableRenderMockupProps> = ({
  users,
  getDeleteUserArr,
}) => {
  return (
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
          {users.map((tarea) => (
            <tr key={tarea.id}>
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
                  onClick={() => getDeleteUserArr(tarea.id)}
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
  );
};
