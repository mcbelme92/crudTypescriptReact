import { FormEvent, MouseEventHandler } from "react";
import { ChangeEvent, useState } from "react";

//<T extends object>(initialState: T)
/* export const useForm = (initialState: T[]) => { */
export const useFormData = <T extends object>(initialState: T[]) => {
  const [formulario, setFormulario] = useState(initialState);

  const getDeleteUserArr = (name: string) => {
    setFormulario(formulario.filter((item: any) => item.name !== name));
  };
  return {
    formulario,
    ...formulario,
    getDeleteUserArr,
  };
};
