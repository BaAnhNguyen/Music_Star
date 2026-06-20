export interface ICreateSheetMusic {
  songId: string;
  notationData: Record<string, unknown>;
  rawFileUrl?: string;
}

export interface IUpdateSheetMusic {
  notationData?: Record<string, unknown>;
  rawFileUrl?: string;
}
