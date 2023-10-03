export interface HttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export interface HttpRequest<B> {
  params?: any;
  header?: any;
  body?: B;
}

export enum HttpStatusCode {
  SUCCESSFULLY_REQUEST = 200,
  BAD_REQUEST = 400,
  ERROR_REQUEST = 500,
  CREATED_REQUEST = 201,
}

export interface IController {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
