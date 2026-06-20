import { Request, Response, NextFunction } from 'express';
import { songService } from '../services/song.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class SongController {
  private readonly service = songService;

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.create(req.body);
      return sendCreated(res, data, 'Bài hát đã được tạo');
    } catch (error) {
      next(error);
    }
  };

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findAll();
      return sendSuccess(res, data, 'Danh sách bài hát');
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findById(req.params.id);
      return sendSuccess(res, data, 'Thông tin bài hát');
    } catch (error) {
      next(error);
    }
  };

  getByArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findByArtist(req.params.artistId);
      return sendSuccess(res, data, 'Danh sách bài hát theo nghệ sĩ');
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.updateById(req.params.id, req.body);
      return sendSuccess(res, data, 'Bài hát đã được cập nhật');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.deleteById(req.params.id);
      return sendSuccess(res, null, 'Bài hát đã được xóa');
    } catch (error) {
      next(error);
    }
  };
}

export const songController = new SongController();
