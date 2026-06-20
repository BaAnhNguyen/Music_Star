import { favoriteRepository } from '../repositories/favorite.repository';
import { ICreateFavorite } from '../interfaces/favorite.interface';
import { BadRequestError, NotFoundError } from '../../../common/utils/AppError';

export class FavoriteService {
  private readonly repository = favoriteRepository;

  async getUserFavorites(userId: string) {
    return this.repository.findByUser(userId);
  }

  async addFavorite(data: ICreateFavorite) {
    const existing = await this.repository.findByUserAndSong(data.userId, data.songId);
    if (existing) throw new BadRequestError('Bài hát đã có trong danh sách yêu thích');
    return this.repository.create(data as any);
  }

  async removeFavorite(userId: string, songId: string) {
    const deleted = await this.repository.deleteByUserAndSong(userId, songId);
    if (!deleted) throw new NotFoundError('Mục yêu thích không tìm thấy');
    return deleted;
  }
}

export const favoriteService = new FavoriteService();
