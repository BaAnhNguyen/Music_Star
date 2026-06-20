import { Router } from 'express';
import { artistController } from '../controllers/artist.controller';
import { songController } from '../../song/controllers/song.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createArtistSchema } from '../dtos/artist.dto';

const router = Router();
const controller = artistController;

router.post('/', validate(createArtistSchema), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);

// Nested: bài hát theo nghệ sĩ
router.get('/:artistId/songs', songController.getByArtist);

export default router;
