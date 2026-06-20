import { sheetMusicRepository } from '../repositories/sheet-music.repository';
import { ICreateSheetMusic, IUpdateSheetMusic } from '../interfaces/sheet-music.interface';
import { NotFoundError } from '../../../common/utils/AppError';

export class SheetMusicService {
  private readonly repository = sheetMusicRepository;

  async getBySongId(songId: string) {
    const sheet = await this.repository.findBySongId(songId);
    if (!sheet) throw new NotFoundError('Bản nhạc (sheet music) không tìm thấy');
    return sheet;
  }

  async upsert(data: ICreateSheetMusic) {
    return this.repository.upsertBySongId(data.songId, data as any);
  }

  async update(songId: string, data: IUpdateSheetMusic) {
    return this.repository.upsertBySongId(songId, data as any);
  }

  async deleteBySongId(songId: string) {
    const sheet = await this.repository.findBySongId(songId);
    if (!sheet) throw new NotFoundError('Bản nhạc (sheet music) không tìm thấy');
    await this.repository.deleteById(sheet.id);
    return sheet;
  }
}

export const sheetMusicService = new SheetMusicService();
