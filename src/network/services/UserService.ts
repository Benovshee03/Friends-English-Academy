import http from "../../common/utils/api";
import User from "../models/User";
import { Result } from "../models/core/Result";
import { BaseService } from "../services/core/BaseService";

export interface IUserService {
  addRoles(model: User): Promise<Result<User>>;
}
export class UserService extends BaseService<User> implements IUserService {
  constructor() {
    super("/users");
  }
  async addRoles(model: User): Promise<Result<User>> {
    try {
      const response = await http.post<User>(`/users/createrole`, model);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }
}