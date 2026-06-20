import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IChordSheet extends Document {
  songId: Types.ObjectId;
  chordProContent: string;
  chordsUsed: string[];
  updatedAt: Date;
}

const chordSheetSchema = new Schema<IChordSheet>(
  {
    songId: { type: Schema.Types.ObjectId, ref: 'Song', required: true, unique: true },
    chordProContent: { type: String, required: true },
    chordsUsed: { type: [String], default: [] },
  },
  { timestamps: { createdAt: false, updatedAt: true } },
);

export const ChordSheet = mongoose.model<IChordSheet>('ChordSheet', chordSheetSchema);
