import mongoose, { Document, Schema } from 'mongoose';

export interface IArtist extends Document {
  name: string;
}

const artistSchema = new Schema<IArtist>({
  name: { type: String, required: true, unique: true, trim: true },
});

export const Artist = mongoose.model<IArtist>('Artist', artistSchema);
