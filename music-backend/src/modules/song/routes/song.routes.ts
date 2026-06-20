import { Router } from 'express';
import { songController } from '../controllers/song.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createSongSchema, updateSongSchema } from '../dtos/song.dto';

const router = Router();
const controller = songController;

router.post('/', validate(createSongSchema), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id', validate(updateSongSchema), controller.update);
router.delete('/:id', controller.delete);

export default router;
