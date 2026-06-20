import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IFavorite extends Document {
  userId: Types.ObjectId;
  songId: Types.ObjectId;
  createdAt: Date;
}

const favoriteSchema = new Schema<IFavorite>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    songId: { type: Schema.Types.ObjectId, ref: 'Song', required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

// Đảm bảo một user không thể yêu thích trùng một bài hát
favoriteSchema.index({ userId: 1, songId: 1 }, { unique: true });

export const Favorite = mongoose.model<IFavorite>('Favorite', favoriteSchema);
