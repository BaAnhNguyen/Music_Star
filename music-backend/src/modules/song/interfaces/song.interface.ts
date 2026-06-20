export interface ICreateSong {
  title: string;
  description?: string;
  bpm?: number;
  key?: string;
  artistId?: string;
}

export interface IUpdateSong {
  title?: string;
  description?: string;
  bpm?: number;
  key?: string;
  artistId?: string;
}
