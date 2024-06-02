import {useState, useEffect} from 'react'

// components
import ContactDetails from './ContactDetails'

interface Contact {
    _id: string;
    name: string;
    email: string;  
    portrait: string;
    resume: string;
    socials: string;
}

const Contact: React.FC = () =>{

    const [contacts, setContacts]= useState<Contact[] | null>(null);

    useEffect((): void =>{
        const fetchContacts= async (): Promise<void> => {
            const response: Response = await fetch('/api/contacts');
            const json: Contact[] = await response.json()

            if(response.ok){
                setContacts(json)
            }
        }
            fetchContacts()
    }, [])

    return(
        <div>
            <div>
                {contacts && contacts.map((contact)=>(
                    <ContactDetails key={contact._id} contact={contact} />
                ))}
            </div>
        </div>
    );

}
      
export default Contact