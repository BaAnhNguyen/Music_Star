import Joi from 'joi';

export const createSongSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200).required(),
  description: Joi.string().trim().max(2000).optional().allow(null, ''),
  bpm: Joi.number().integer().min(0).optional(),
  key: Joi.string().trim().max(20).optional().allow(null, ''),
  artistId: Joi.string().hex().length(24).optional().allow(null, ''),
});

export const updateSongSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200).optional(),
  description: Joi.string().trim().max(2000).optional().allow(null, ''),
  bpm: Joi.number().integer().min(0).optional(),
  key: Joi.string().trim().max(20).optional().allow(null, ''),
  artistId: Joi.string().hex().length(24).optional().allow(null, ''),
});
