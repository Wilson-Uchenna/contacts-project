import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import  ContactProvider  from "./components/ContactContext.js";
import Home from "./components/homePage";
import AddContact from "./components/addContact";
import DisplayContact from "./components/displayContact";
import { ContactContext } from "./components/ContactContext";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    fetchData()
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      // Add a color property to each contact with an initial color value (e.g., 'gray')
      const contactsWithColor = data.map((contact) => ({
        ...contact,
        color: 'gray',
      }));
  
      setContacts(contactsWithColor);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
      <ContactContext.Provider value={{contacts, setContacts}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route 
          path="/add-contact" 
          element={<AddContact/>}/>
          <Route 
          path="/display-contact"
          element={<DisplayContact/>}/>
        </Routes>
      </ContactContext.Provider>
    </>
    
  )
}

export default App