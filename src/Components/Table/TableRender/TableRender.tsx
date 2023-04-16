import { FC, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  User,
  ListUsersProps,
  TableRenderMockupProps,
  TableItem,
  headLineaArray,
} from "../../../interface";
import { Link } from "react-router-dom";
import { deleteUserApi, getUsersApi } from "../../../api/Table";

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

  headLineaArray[5]["class"] = "mi-clase-personalizada";

  return (
    <div className="container">
      <div className="py-0">
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              {headLineaArray.map((item, index) => (
                <th key={item.id} className="mi-clase-personalizada">
                  {item.table_line}
                </th>
              ))}
            </tr>
            {dataEfect?.map((item, index) => (
              <tr key={item?.id}>
                <th>{item?.id} </th>
                <th>{item?.name} </th>
                <th>{item?.age} </th>
                <th>{item?.color} </th>
                <th>{item?.address} </th>
                <td style={{ textAlign: "center" }}>
                  <div className="gap-1">
                    <Link to={`/view/${item?.id}`}>
                      <Button variant="primary" className="mx-1">
                        Visualizar
                      </Button>
                    </Link>
                    <Link to={`/edit/${item?.id}`}>
                      <Button className="mx-1" variant="light">
                        Editar
                      </Button>
                    </Link>
                    <Button
                      className="mx-1"
                      variant="danger"
                      onClick={() => deleteUser(Number(item?.id))}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      </div>
    </div>
  );
};
