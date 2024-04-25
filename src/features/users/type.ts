import User from "../../network/models/User";

export interface UserState {
  list: User[] | any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: User | null;
}

export interface UserType {
  _id: string;
  key: string;
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  settings?: React.ReactNode;
}