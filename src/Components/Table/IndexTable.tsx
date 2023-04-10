import { FC } from "react";
import { Task } from "../../interface";
import { TableView } from "./TableView";
import { TableRender } from "./TableRender";
import { NavBar } from "../NavBar";
import { AddTask } from "./Form";
//primero crear los props despues meter la propiedad con lo que se recibira
interface Props {
  //Si se requiere el [] para que identifique es que es un array
  taskData: Task[];
}

export const IndexTable: FC<Props> = ({ taskData }: Props) => {
  return (
    <div className="container">
      <NavBar />
      <TableRender data={taskData} />
    </div>
  );
};
