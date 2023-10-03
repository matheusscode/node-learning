import { HttpResponse, HttpStatusCode } from "./protocols";
export const successfullyRequest = <T>(body: any): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.SUCCESSFULLY_REQUEST,
    body,
  };
};

export const createdRequest = <T>(body: any): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.CREATED_REQUEST,
    body,
  };
};

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const errorRequest = (): HttpResponse<string> => {
    return {
      statusCode: HttpStatusCode.ERROR_REQUEST,
      body: 'Something went wrong.',
    };
  };
  