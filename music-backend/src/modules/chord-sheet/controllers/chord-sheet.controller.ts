import { Request, Response, NextFunction } from 'express';
import { chordSheetService } from '../services/chord-sheet.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class ChordSheetController {
  private readonly service = chordSheetService;

  getBySong = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getBySongId(req.params.songId);
      return sendSuccess(res, data, 'Thông tin hợp âm (chord sheet)');
    } catch (error) {
      next(error);
    }
  };

  upsert = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.upsert(req.body);
      return sendCreated(res, data, 'Hợp âm (chord sheet) đã được lưu');
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.update(req.params.songId, req.body);
      return sendSuccess(res, data, 'Hợp âm (chord sheet) đã được cập nhật');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.deleteBySongId(req.params.songId);
      return sendSuccess(res, null, 'Hợp âm (chord sheet) đã được xóa');
    } catch (error) {
      next(error);
    }
  };
}

export const chordSheetController = new ChordSheetController();
