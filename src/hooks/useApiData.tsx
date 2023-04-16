import { useState, useEffect } from "react";
import { getUsersApi } from "../api/Table";
import { User } from "../interface";

interface ObjectData {
  [key: string]: string | number;
}

type UseApiRestReturnType = {
  data: User[] | undefined;
  loading: boolean;
};
export const useApiData = (objectData: ObjectData): UseApiRestReturnType => {
  const [data, setData] = useState<User[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsersApi();
      setData(response?.data);
    };
    fetchData();
  }, [objectData]);

  return { data, loading };
};
