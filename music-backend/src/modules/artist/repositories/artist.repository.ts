import { BaseRepository } from '../../../common/repositories/base.repository';
import { Artist, IArtist } from '../../../models/artist.model';

export class ArtistRepository extends BaseRepository<IArtist> {
  constructor() {
    super(Artist);
  }
}

export const artistRepository = new ArtistRepository();
