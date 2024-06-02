import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Contact from '../models/contact'


//get all contacts
export const getContacts = async (req: Request, res: Response) => {
    const contacts = await Contact.find({}).sort ({createdAt:-1})
    res.status(201).json(contacts)
}


//get a single contact
export const getContact = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no contact found'})
    }

    const contact = await Contact.findById(id)

    if (!contact){
        return res.status(404).json({error:'no contact found'})
    }

    res.status(201).json(contact)
}


//create new contact
export const createContact = async (req: Request, res: Response) => {
    const { name, portrait, socials, resume, email } = req.body;
        try {

    const newContact = await Contact.create({ name, portrait, socials, resume, email });

    res.status(201).json(newContact);
        } catch (error) {
    res.status(400).json({ error: 'cannot create contact' });
        }
    };

    
//delete a contact
export const deleteContact = async (req: Request, res: Response) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no contact found'})
    }

    const contact = await Contact.findOneAndDelete({_id: id})

    if (!contact) {
            return res.status(404).json({error:'no contact found'})
    }

    res.status(201).json(contact)
    }


//update a contact
export const updateContact = async (req: Request, res: Response) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no contact found'})
    }

    const contact = await Contact.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!contact) {
        return res.status(404).json({error:'no contact found'})
    }
    
    res.status(201).json(contact)
    }

