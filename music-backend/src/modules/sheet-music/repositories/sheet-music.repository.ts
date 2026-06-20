import { BaseRepository } from '../../../common/repositories/base.repository';
import { SheetMusic, ISheetMusic } from '../../../models/sheet-music.model';

export class SheetMusicRepository extends BaseRepository<ISheetMusic> {
  constructor() {
    super(SheetMusic);
  }

  findBySongId(songId: string) {
    return SheetMusic.findOne({ songId }).exec();
  }

  upsertBySongId(songId: string, data: Partial<ISheetMusic>) {
    return SheetMusic.findOneAndUpdate(
      { songId },
      { ...data, songId },
      { new: true, upsert: true },
    ).exec();
  }
}

export const sheetMusicRepository = new SheetMusicRepository();
