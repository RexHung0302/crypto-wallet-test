interface BasicAPIResponse<T> {
  data?: T;
}

interface BasicAPIErrorResponse extends BasicAPIResponse<null> {
  ok: 'false';
  warning: string;
}

interface BasicAPISuccessResponse<T> extends BasicAPIResponse<T> {
  ok: 'true';
  data: T;
}

export type APIResponse<T> = BasicAPIErrorResponse | BasicAPISuccessResponse<T>;