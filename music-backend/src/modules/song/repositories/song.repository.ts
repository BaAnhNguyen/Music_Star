import { BaseRepository } from '../../../common/repositories/base.repository';
import { Song, ISong } from '../../../models/song.model';

export class SongRepository extends BaseRepository<ISong> {
  constructor() {
    super(Song);
  }

  findAllWithArtist() {
    return Song.find().populate('artistId', 'name').exec();
  }

  findByIdWithArtist(id: string) {
    return Song.findById(id).populate('artistId', 'name').exec();
  }

  findByArtist(artistId: string) {
    return Song.find({ artistId }).exec();
  }
}

export const songRepository = new SongRepository();
