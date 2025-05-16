interface BasicAPIResponse<T = unknown> {
  data?: T;
}

export interface BasicAPIErrorResponse extends BasicAPIResponse<null> {
  ok: 'false';
  warning: string;
}

export interface BasicAPISuccessResponse<T = unknown> extends BasicAPIResponse<T> {
  ok: 'true';
  data: T;
}

export type APIResponse<T = unknown> = BasicAPIErrorResponse | BasicAPISuccessResponse<T>;