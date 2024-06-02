import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Review from '../models/review';


//import Review from '../models/review'
//import mongoose from 'mongoose'


//get all reviews
export const getReviews = async (req: Request, res: Response) => {
    const reviews = await Review.find({}).sort ({createdAt:-1})
    res.status(201).json(reviews)
}


//get a single review
export const getReview = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no review found'})
    }

    const review = await Review.findById(id)

    if (!review){
        return res.status(404).json({error:'no review found'})
    }

    res.status(201).json(review)
}


//create new review
export const createReview = async (req: Request, res: Response) => {
    const { firstName, lastName, email, comments, starRating } = req.body;
        try {

    const newReview = await Review.create({ firstName, lastName, email, comments, starRating });

    res.status(201).json(newReview);
        } catch (error) {
    res.status(400).json({ error: 'cannot create review' });
        }
    };

    
//delete a review
export const deleteReview = async (req: Request, res: Response) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no review found'})
    }

    const review = await Review.findOneAndDelete({_id: id})

    if (!review) {
            return res.status(404).json({error:'no review found'})
    }

    res.status(201).json(review)
    }


//update a review
export const updateReview = async (req: Request, res: Response) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no review found'})
    }

    const review = await Review.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!review) {
        return res.status(404).json({error:'no review found'})
    }
    
    res.status(201).json(review)
    }
