import Joi from 'joi';

export const createSheetMusicSchema = Joi.object({
  songId: Joi.string().hex().length(24).required(),
  notationData: Joi.object().required(),
  rawFileUrl: Joi.string().uri().optional().allow(null, ''),
});

export const updateSheetMusicSchema = Joi.object({
  notationData: Joi.object().optional(),
  rawFileUrl: Joi.string().uri().optional().allow(null, ''),
});
