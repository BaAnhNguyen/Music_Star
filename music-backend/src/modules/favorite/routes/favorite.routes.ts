import { Router } from 'express';
import { favoriteController } from '../controllers/favorite.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createFavoriteSchema } from '../dtos/favorite.dto';

const router = Router();
const controller = favoriteController;

router.get('/users/:userId', controller.getUserFavorites);
router.post('/', validate(createFavoriteSchema), controller.addFavorite);
router.delete('/:userId/:songId', controller.removeFavorite);

export default router;
