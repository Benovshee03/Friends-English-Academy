import Permission from "../models/Permission";
import { BaseService } from "./core/BaseService";

export class PermissionService extends BaseService<Permission> {
  constructor() {
    super("/permissions");
  }
}