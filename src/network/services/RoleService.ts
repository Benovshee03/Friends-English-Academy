import Role from "../models/Role";
import { BaseService } from "./core/BaseService";

export class RoleService extends BaseService<Role> {
  constructor() {
    super("/roles");
  }
}