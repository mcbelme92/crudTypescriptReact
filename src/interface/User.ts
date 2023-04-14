export interface User {
  id?: number;
  name: string;
  age: number;
  color: string;
  address: string;
}

export interface ListUsersProps {
  users: User[];
}
