import Joi from 'joi';

export const createArtistSchema = Joi.object({
  name: Joi.string().trim().min(1).max(150).required(),
});
