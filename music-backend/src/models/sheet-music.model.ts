import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ISheetMusic extends Document {
  songId: Types.ObjectId;
  notationData: Record<string, unknown>;
  rawFileUrl?: string;
  updatedAt: Date;
}

const sheetMusicSchema = new Schema<ISheetMusic>(
  {
    songId: { type: Schema.Types.ObjectId, ref: 'Song', required: true, unique: true },
    notationData: { type: Schema.Types.Mixed, required: true },
    rawFileUrl: { type: String },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const SheetMusic = mongoose.model<ISheetMusic>('SheetMusic', sheetMusicSchema);
