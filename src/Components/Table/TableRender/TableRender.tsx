import { FC, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { User, ListUsersProps } from "../../../interface";
import { Link } from "react-router-dom";
import { deleteUserApi, getUsersApi } from "../../../api/Table";

interface Props {
  data: any;
}
interface TableRenderMockupProps {
  /* formulario: User[]; */
  users: User[] | undefined;
  deleteUserApi?: any;
}

export const TableRender: FC<ListUsersProps> = ({ users }) => {
  return (
    <div className="container">
      <TableRenderMockup users={users} deleteUserApi={deleteUserApi} />
    </div>
  );
};

const TableRenderMockup: FC<TableRenderMockupProps> = ({
  users,
  deleteUserApi,
}) => {
  const [dataEfect, setDataEfect] = useState<User[] | undefined>(users);

  const [render, setRender] = useState<boolean>(false);

  const deleteUser = async (id: number): Promise<void> => {
    const response = await deleteUserApi(Number(id));
    setRender(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsersApi();

      setDataEfect(result?.data);
    };
    fetchData();
    setRender(false);
  }, [render]);

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
      </Table>
    </div>
  );
};
