import { useState } from "react";
import { TableRender } from "./TableRender/TableRender";
import { NavBar } from "../NavBar";
import { useApiData } from "../../hooks";

export const IndexTable = () => {
  const [formulario, setFormulario] = useState({
    id: 0,
    name: "",
    age: 0,
    color: "",
    address: "",
  });
  const { data } = useApiData(formulario);

  return (
    <div className="container">
      <NavBar />
      <TableRender users={data} />
    </div>
  );
};
