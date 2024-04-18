import ResultTypes from "./ResultTypes";

export interface Result<T> {
  data: T | any;
  message: string;
  status: ResultTypes;
  statusCode: number;
}
