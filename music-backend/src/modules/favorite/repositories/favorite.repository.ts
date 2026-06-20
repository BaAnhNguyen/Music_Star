import { BaseRepository } from '../../../common/repositories/base.repository';
import { Favorite, IFavorite } from '../../../models/favorite.model';

export class FavoriteRepository extends BaseRepository<IFavorite> {
  constructor() {
    super(Favorite);
  }

  findByUser(userId: string) {
    return Favorite.find({ userId }).populate('songId').exec();
  }

  findByUserAndSong(userId: string, songId: string) {
    return Favorite.findOne({ userId, songId }).exec();
  }

  deleteByUserAndSong(userId: string, songId: string) {
    return Favorite.findOneAndDelete({ userId, songId }).exec();
  }
}

export const favoriteRepository = new FavoriteRepository();
