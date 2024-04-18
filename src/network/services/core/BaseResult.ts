import { Result } from "../../models/core/Result";
import ResultTypes from "../../models/core/ResultTypes";

class BaseResults<T> {
  handleResponse(response: T | T[]): Result<T | T[]> {
    return {
      data: response,
      message: "işlem başarılı",
      status: ResultTypes.Success,
      statusCode: 200,
    };
  }

  handleError(error: any): Result<T | T[]> {
    return {
      data: null,
      message: error.message || "Bir hata oluştu",
      status: ResultTypes.Error,
      statusCode: error.statusCode || 500,
    };
  }

}

export default BaseResults;