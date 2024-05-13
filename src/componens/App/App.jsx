import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css"


const dataUser = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];


export default function App() {
    const [contacts, setContacts] = useState(dataUser);
    const [filter, setFilter] = useState('');

    function addContact(newUser) {
        console.log(newUser);
        setContacts((prevContacts) => {
            return [...prevContacts, newUser]
        })
    }

    function deleteContact(contactId) {
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId)
           
        })
        
    }

    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        
    

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    ); 
}