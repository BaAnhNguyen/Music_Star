import { Request, Response, NextFunction } from 'express';
import { sheetMusicService } from '../services/sheet-music.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class SheetMusicController {
  private readonly service = sheetMusicService;

  getBySong = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getBySongId(req.params.songId);
      return sendSuccess(res, data, 'Thông tin bản nhạc (sheet music)');
    } catch (error) {
      next(error);
    }
  };

  upsert = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.upsert(req.body);
      return sendCreated(res, data, 'Bản nhạc (sheet music) đã được lưu');
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.update(req.params.songId, req.body);
      return sendSuccess(res, data, 'Bản nhạc (sheet music) đã được cập nhật');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.deleteBySongId(req.params.songId);
      return sendSuccess(res, null, 'Bản nhạc (sheet music) đã được xóa');
    } catch (error) {
      next(error);
    }
  };
}

export const sheetMusicController = new SheetMusicController();
