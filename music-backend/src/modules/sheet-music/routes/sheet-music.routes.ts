import { Router } from 'express';
import { sheetMusicController } from '../controllers/sheet-music.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createSheetMusicSchema, updateSheetMusicSchema } from '../dtos/sheet-music.dto';

const router = Router();
const controller = sheetMusicController;

router.get('/songs/:songId', controller.getBySong);
router.post('/', validate(createSheetMusicSchema), controller.upsert);
router.patch('/songs/:songId', validate(updateSheetMusicSchema), controller.update);
router.delete('/songs/:songId', controller.delete);

export default router;
