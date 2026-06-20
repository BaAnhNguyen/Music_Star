import { songRepository } from '../repositories/song.repository';
import { ICreateSong, IUpdateSong } from '../interfaces/song.interface';
import { NotFoundError } from '../../../common/utils/AppError';

export class SongService {
  private readonly repository = songRepository;

  async create(data: ICreateSong) {
    return this.repository.create(data as any);
  }

  async findAll() {
    return this.repository.findAllWithArtist();
  }

  async findById(id: string) {
    const song = await this.repository.findByIdWithArtist(id);
    if (!song) throw new NotFoundError('Bài hát không tìm thấy');
    return song;
  }

  async findByArtist(artistId: string) {
    return this.repository.findByArtist(artistId);
  }

  async updateById(id: string, data: IUpdateSong) {
    const updated = await this.repository.updateById(id, data);
    if (!updated) throw new NotFoundError('Bài hát không tìm thấy');
    return updated;
  }

  async deleteById(id: string) {
    const deleted = await this.repository.deleteById(id);
    if (!deleted) throw new NotFoundError('Bài hát không tìm thấy');
    return deleted;
  }
}

export const songService = new SongService();
