import { chordSheetRepository } from '../repositories/chord-sheet.repository';
import { ICreateChordSheet, IUpdateChordSheet } from '../interfaces/chord-sheet.interface';
import { NotFoundError } from '../../../common/utils/AppError';

export class ChordSheetService {
  private readonly repository = chordSheetRepository;

  async getBySongId(songId: string) {
    const chord = await this.repository.findBySongId(songId);
    if (!chord) throw new NotFoundError('Hợp âm (chord sheet) không tìm thấy');
    return chord;
  }

  async upsert(data: ICreateChordSheet) {
    return this.repository.upsertBySongId(data.songId, data as any);
  }

  async update(songId: string, data: IUpdateChordSheet) {
    return this.repository.upsertBySongId(songId, data as any);
  }

  async deleteBySongId(songId: string) {
    const chord = await this.repository.findBySongId(songId);
    if (!chord) throw new NotFoundError('Hợp âm (chord sheet) không tìm thấy');
    await this.repository.deleteById(chord.id);
    return chord;
  }
}

export const chordSheetService = new ChordSheetService();
