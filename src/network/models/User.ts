import { IBaseEntity } from "./core/IBaseEntity";

interface User extends IBaseEntity {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  roleIds?: string[];
}

export default User; 