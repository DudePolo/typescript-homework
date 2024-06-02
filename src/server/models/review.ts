import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Review extends Document {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
    starRating: number;
}

const reviewSchema = new Schema <Review> ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    comments: { type: String, require: true },
    starRating: { type: Number, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;