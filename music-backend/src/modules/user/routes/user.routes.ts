import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { validate } from '../../../common/middleware/validate.middleware';
import { createUserSchema, updateUserSchema } from '../dtos/user.dto';

const router = Router();
const controller = userController;

router.post('/', validate(createUserSchema), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id', validate(updateUserSchema), controller.update);
router.delete('/:id', controller.delete);

export default router;
