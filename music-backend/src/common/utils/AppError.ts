export interface FieldError {
  field: string;
  message: string;
}

export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 500,
    public readonly errors?: FieldError[],
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ValidationError extends AppError {
  constructor(msg: string, e?: FieldError[]) {
    super(msg, 422, e);
  }
}
export class NotFoundError extends AppError {
  constructor(msg = 'Not found') {
    super(msg, 404);
  }
}
export class BadRequestError extends AppError {
  constructor(msg = 'Bad Request') {
    super(msg, 400);
  }
}
export class ConflictError extends AppError {
  constructor(msg = 'Conflict') {
    super(msg, 409);
  }
}
