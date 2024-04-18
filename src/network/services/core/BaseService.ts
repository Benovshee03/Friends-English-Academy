import http from "../../../common/utils/api";
import { IBaseEntity, Result } from "../../models";
import { IBaseService } from "./IBaseService";
import BaseResults from "./BaseResult";
export class BaseService<T extends IBaseEntity> implements IBaseService<T> {
  private _url: string;
  constructor(url: string) {
    this._url = url;
  }

  handels = new BaseResults<T>();

  async get(id: string): Promise<Result<T>> {
    try {
      const response = await http.get<T>(`${this._url}/${id}`);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }

  async getAll(): Promise<Result<T[]>> {
    try {
      const response = await http.get<T[]>(this._url);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }

  async add(entity: T): Promise<Result<T>> {
    try {
      const response = await http.post<T>(this._url, entity);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }

  async update(id: string, entity: T): Promise<Result<T>> {
    try {
      const response = await http.patch<T>(`${this._url}/${id}`, entity);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }

  async delete(id: string): Promise<Result<T>> {
    try {
      const response = await http.delete<T>(`${this._url}/${id}`);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }
  /*
   try {
      const response = await http.post<T>();
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
*/
}