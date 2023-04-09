import { FormEvent, MouseEventHandler } from "react";
import { ChangeEvent, useState } from "react";

//<T extends object>(initialState: T)
/* export const useForm = (initialState: T[]) => { */
export const useForm = <T extends object>(initialState: T) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* console.log(formulario); */
    /* console.log(e);
    console.log(formulario); */
  };
  /* const getDeleteUserArr = (name: string) => {
    setFormulario(formulario.filter((item) => item.name !== name));
  }; */
  return {
    formulario,
    handleChange,
    ...formulario,
    onSubmit,
    /* getDeleteUserArr, */
  };
};
//MI ERROR ESTUVO EN QUE METI EL RETURN DENTRO DE HANDLE CHANGE POR ESO NO SACABA
//las funciones
