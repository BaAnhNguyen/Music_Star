import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class UserController {
  private readonly service = userService;

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.create(req.body);
      return sendCreated(res, data, 'Người dùng đã được tạo');
    } catch (error) {
      next(error);
    }
  };

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findAll();
      return sendSuccess(res, data, 'Danh sách người dùng');
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findById(req.params.id);
      return sendSuccess(res, data, 'Thông tin người dùng');
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.updateById(req.params.id, req.body);
      return sendSuccess(res, data, 'Thông tin người dùng đã được cập nhật');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.deleteById(req.params.id);
      return sendSuccess(res, null, 'Người dùng đã được xóa');
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController();
