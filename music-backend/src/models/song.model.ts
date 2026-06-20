import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ISong extends Document {
  title: string;
  description?: string;
  bpm?: number;
  key?: string;
  artistId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const songSchema = new Schema<ISong>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    bpm: { type: Number },
    key: { type: String },
    artistId: { type: Schema.Types.ObjectId, ref: 'Artist', default: null },
  },
  { timestamps: true },
);

export const Song = mongoose.model<ISong>('Song', songSchema);
