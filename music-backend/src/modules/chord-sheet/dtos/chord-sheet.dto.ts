import Joi from 'joi';

export const createChordSheetSchema = Joi.object({
  songId: Joi.string().hex().length(24).required(),
  chordProContent: Joi.string().min(1).required(),
  chordsUsed: Joi.array().items(Joi.string().trim()).default([]),
});

export const updateChordSheetSchema = Joi.object({
  chordProContent: Joi.string().min(1).optional(),
  chordsUsed: Joi.array().items(Joi.string().trim()).optional(),
});
