import { BaseRepository } from '../../../common/repositories/base.repository';
import { ChordSheet, IChordSheet } from '../../../models/chord-sheet.model';

export class ChordSheetRepository extends BaseRepository<IChordSheet> {
  constructor() {
    super(ChordSheet);
  }

  findBySongId(songId: string) {
    return ChordSheet.findOne({ songId }).exec();
  }

  upsertBySongId(songId: string, data: Partial<IChordSheet>) {
    return ChordSheet.findOneAndUpdate(
      { songId },
      { ...data, songId },
      { new: true, upsert: true },
    ).exec();
  }
}

export const chordSheetRepository = new ChordSheetRepository();
