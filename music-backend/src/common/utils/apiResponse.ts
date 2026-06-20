import { Response } from 'express';

export const sendSuccess = <T>(res: Response, data: T, message = 'Success', code = 200) =>
  res.status(code).json({ success: true, message, data });

export const sendCreated = <T>(res: Response, data: T, message = 'Created') =>
  sendSuccess(res, data, message, 201);

export const sendNoContent = (res: Response) => res.status(204).send();

export const sendError = (res: Response, message = 'Error', code = 500, errors?: unknown) =>
  res.status(code).json({ success: false, message, errors });
