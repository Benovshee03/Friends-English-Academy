import { IBaseEntity, Result } from "../../models";

// ben bir servis oluşturduğumda, içeriye vermem gereken değer mutlaka IBaseEntity tipinde olmalıdır (miras almış olmalıdır).
export interface IBaseService<T extends IBaseEntity> {
  /**
   * get all items
   */
  getAll(): Promise<Result<T[]>>;
 
  /**
   * get item by id
   * @param id
   */
  get(id: string): Promise<Result<T>>;

  /**
   * Create new item
   * @param entity
   */
  add(entity: T): Promise<Result<T>>;

  /**
   * delete item by id
   * @param id
   */
  delete(id: string): Promise<Result<T>>;

  /**
   * update item by id
   * @param id
   * @param entity
   */
  update(id: string, entity: T): Promise<Result<T>>;
}