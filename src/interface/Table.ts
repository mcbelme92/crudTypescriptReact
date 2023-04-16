import { User } from "./User";

export interface TableRenderMockupProps {
  /* formulario: User[]; */
  users: User[] | undefined;
  deleteUserApi?: any;
}

export interface TableItem {
  id: number;
  table_line: string;
  class?: string;
}

export const headLineaArray: TableItem[] = [
  {
    id: 1,
    table_line: "id",
  },
  {
    id: 2,
    table_line: "Nombre",
  },
  {
    id: 3,
    table_line: "Edad",
  },
  {
    id: 4,
    table_line: "Color",
  },
  {
    id: 5,
    table_line: "Direccion",
  },
  {
    id: 6,
    table_line: "Accion",
  },
];
