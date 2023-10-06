import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./searchbox";
import ContactList from "../contactlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Favorited from "./favorites/favorited";
import { ContactContext } from "./ContactContext";


const Home =() =>  {
  // const [ contact, setContact ] = useState([]);
  const [ searchfield, setSearchField ] = useState('');
  const [favorites, setFavorites] = useState([]);
  const {contacts, setContacts} = useContext(ContactContext)


  const filteredContacts = contacts.filter((contact) => {
  return contact.name.toLowerCase().includes(searchfield.toLowerCase())
})

const handleFavoriteClick = (contactId) => {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      const newColor = contact.color === 'gray' ? 'yellow' : 'gray';
      return { ...contact, color: newColor };
    }
    return contact;
  });

  setContacts(updatedContacts);

  // Check if the contact is already in favorites
  const isFavorite = favorites.find((contact) => contact.id === contactId);

  if (isFavorite) {
    // If it's already a favorite, remove it from favorites
    setFavorites(favorites.filter((contact) => contact.id !== contactId));
  } else {
    // If it's not a favorite, add it to favorites
    const contactToAdd = contacts.find((contact) => contact.id === contactId);
    setFavorites([...favorites, contactToAdd]);
  }
};

const navigate = useNavigate();
const navAddContact = () => {
    navigate('/add-contact')
}

  return (
    <div>
      <div className="ma2 flex justify-between items-center ph2">
      <h3>Contacts</h3>
      
      <button className="ph3 pv2 link br3" onClick={navAddContact}>
        <FontAwesomeIcon icon={faPlus}/>Add
      </button>
      
      
      </div>
      <SearchBox searchChange ={setSearchField}/>
      <Favorited contacts={favorites}/>
      <ContactList contacts ={filteredContacts} click={handleFavoriteClick}/>
    </div>
  );
  }

export default Home
