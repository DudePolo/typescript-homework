import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Contact extends Document {
    name: string;
    portrait: string;
    socials: string;
    resume: string;
    email: string;
}

const contactSchema = new Schema <Contact> ({
    name: { type: String, default: 'Anonymous' },
    portrait: { type: String, },
    socials: { type: String, },
    resume: { type: String,  },
    email: { type: String,  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;