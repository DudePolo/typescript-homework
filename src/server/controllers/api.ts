// // Import the required modules
import express from 'express';
import mongoose from 'mongoose';
import {createReview, getReview, getReviews, updateReview, deleteReview} from './reviewController';
import {createContact, getContact, getContacts, updateContact, deleteContact} from'./contactController';
// import contactSeedData from '../models/contact_seed.js';
// import Contact from '../models/contact.js'

// Router
const router = express.Router();


// Routes
router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.get('/reviews/:id', getReview);
router.patch('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

router.get('/contacts', getContacts);
router.post('/contacts', createContact);
router.get('/contacts/:id', getContact);
router.patch('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

//contact seed data
// router.post('/contacts/seed', (req, res) => {
//     Contact.insertMany(contactSeedData)
//     .then(createdContacts => {
//         console.log(createdContacts)
//     })
// })


router.get('*', (req, res) => {
    res.json('404')
});


// Export the router
export default router;
