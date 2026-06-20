import { Request, Response, NextFunction } from 'express';
import { artistService } from '../services/artist.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class ArtistController {
  private readonly service = artistService;

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.create(req.body);
      return sendCreated(res, data, 'Nghệ sĩ đã được tạo');
    } catch (error) {
      next(error);
    }
  };

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findAll();
      return sendSuccess(res, data, 'Danh sách nghệ sĩ');
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findById(req.params.id);
      return sendSuccess(res, data, 'Thông tin nghệ sĩ');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.deleteById(req.params.id);
      return sendSuccess(res, null, 'Nghệ sĩ đã được xóa');
    } catch (error) {
      next(error);
    }
  };
}

export const artistController = new ArtistController();
