import Joi from 'joi';

export const createUserSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().trim().max(100).optional().allow(null, ''),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().trim().max(100).optional().allow(null, ''),
  password: Joi.string().min(6).optional(),
});
