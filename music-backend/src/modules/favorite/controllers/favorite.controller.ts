import { Request, Response, NextFunction } from 'express';
import { favoriteService } from '../services/favorite.service';
import { sendSuccess, sendCreated } from '../../../common/utils/apiResponse';

export class FavoriteController {
  private readonly service = favoriteService;

  getUserFavorites = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.getUserFavorites(req.params.userId);
      return sendSuccess(res, data, 'Danh sách yêu thích');
    } catch (error) {
      next(error);
    }
  };

  addFavorite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.addFavorite(req.body);
      return sendCreated(res, data, 'Đã thêm vào yêu thích');
    } catch (error) {
      next(error);
    }
  };

  removeFavorite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, songId } = req.params;
      await this.service.removeFavorite(userId, songId);
      return sendSuccess(res, null, 'Đã xóa khỏi yêu thích');
    } catch (error) {
      next(error);
    }
  };
}

export const favoriteController = new FavoriteController();
