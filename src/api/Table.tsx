import { BASE_PATH } from "../utils/contants";
import axios from "axios";
import { User } from "../interface";

export const getUsersApi = async () => {
  //Ya que se pone asi pues con el try catch detecta un retorno de algopor separado
  try {
    const url: string = `${BASE_PATH}/users`;
    const result = await axios.get<User[]>(url);
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log("Error desconocido");
    }
  }
};

export const createUserApi = async (body: object) => {
  try {
    const url: string = `${BASE_PATH}/user`;
    const response = await axios.post(url, body);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Error Desconocido");
    }
  }
};
export const modifyUserApi = async (body: object) => {
  try {
    const url: string = `${BASE_PATH}/modify-user`;
    const response = await axios.post(url, body);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Error Desconocido");
    }
  }
};

export const deleteUserApi = async (id: number) => {
  const url: string = `${BASE_PATH}/user/${id}`;
  const response = await axios.delete(url);
  /* console.log(response); */
};
