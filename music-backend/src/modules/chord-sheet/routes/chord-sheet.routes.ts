import { Router } from 'express';
import { chordSheetController } from '../controllers/chord-sheet.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createChordSheetSchema, updateChordSheetSchema } from '../dtos/chord-sheet.dto';

const router = Router();
const controller = chordSheetController;

router.get('/songs/:songId', controller.getBySong);
router.post('/', validate(createChordSheetSchema), controller.upsert);
router.patch('/songs/:songId', validate(updateChordSheetSchema), controller.update);
router.delete('/songs/:songId', controller.delete);

export default router;
