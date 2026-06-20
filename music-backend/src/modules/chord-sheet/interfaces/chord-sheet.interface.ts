export interface ICreateChordSheet {
  songId: string;
  chordProContent: string;
  chordsUsed: string[];
}

export interface IUpdateChordSheet {
  chordProContent?: string;
  chordsUsed?: string[];
}
