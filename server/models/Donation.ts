import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export enum PlantStatus {
  AVAILABLE = 'AVAILABLE',
  PENDING = 'PENDING',
  CLAIMED = 'CLAIMED',
}

export interface IDonation extends Document {
  donor: mongoose.Types.ObjectId | IUser;
  title: string;
  description: string;
  plantType: string;
  imageUrls: string[];
  location: string;
  status: PlantStatus;
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema: Schema = new Schema(
  {
    donor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Donor ID is required'],
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    plantType: {
      type: String,
      required: [true, 'Plant type category is required'],
      index: true, // Useful for search/filtering
    },
    imageUrls: {
      type: [String],
      validate: [
        (val: string[]) => val.length <= 5,
        'Cannot exceed 5 images',
      ],
      default: [],
    },
    location: {
      type: String,
      required: [true, 'Pickup location is required'],
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(PlantStatus),
      default: PlantStatus.AVAILABLE,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Donation || mongoose.model<IDonation>('Donation', DonationSchema);
