import { artistRepository } from '../repositories/artist.repository';
import { ICreateArtist } from '../interfaces/artist.interface';
import { BadRequestError, NotFoundError } from '../../../common/utils/AppError';

export class ArtistService {
  private readonly repository = artistRepository;

  async create(data: ICreateArtist) {
    const existing = await this.repository.findOne({ name: data.name });
    if (existing) throw new BadRequestError('Tên nghệ sĩ đã tồn tại');
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findMany();
  }

  async findById(id: string) {
    const artist = await this.repository.findById(id);
    if (!artist) throw new NotFoundError('Nghệ sĩ không tìm thấy');
    return artist;
  }

  async deleteById(id: string) {
    const deleted = await this.repository.deleteById(id);
    if (!deleted) throw new NotFoundError('Nghệ sĩ không tìm thấy');
    return deleted;
  }
}

export const artistService = new ArtistService();
