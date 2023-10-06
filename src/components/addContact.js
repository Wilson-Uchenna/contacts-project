import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ContactAvatar from "./contact/contactAvatar";
import './addContact.css'
import { ContactContext } from "./ContactContext.js";

const AddContact = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const [id, setId] = useState('');
  const [color, setColor] = useState('');
  const {contacts, setContacts} = useContext(ContactContext);

  const handleNameChange = (event) => {
    // Update the name state when the input changes
    setName(event.target.value);
    setId(contacts.length+1)
    console.log(contacts.length)
  };

  const handleNumInput = (event) => {
      setNum(event.target.value)
      console.log(num)
  }

  const handleNumInput2 = (event) => {
    setNum2(event.target.value)
    console.log(num2)
  }
  const nameStyle= {
    width: name==='' ? '100%': '70%',
    padding: name === '' ? '0 15px' : '0 0'
    
  }

  const navigate = useNavigate()
  const navigateBack = () => {
    navigate('/' , {}
    )
  }
  
  const newContact = { name, num, num2, id, color}
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, newContact]);
    setColor(color)
    navigate("/display-contact", {
      state: {
        name,
        num,
        num2,
        id
      }
    })
  }


  return (
    <div className="pa2">
      <div>
        <p onClick={navigateBack}>
          <FontAwesomeIcon icon={faChevronLeft} /> Contacts
        </p>
      </div>
      <div className="pa2">
        <h4>Add Contact</h4>
        <form method="post" onSubmit={handleOnSubmit}>
          <div className="flex items-center justify-between">
            <div>
                {name !== '' ?
                 (
                    <ContactAvatar name={name} className='larger-avatar'/>
                )
                    : null
                }
                
            </div>
            <div className="namewithWithout" style={nameStyle}>
            <p className="paragraph">Contact Name: </p>
            <input
              type="text"
              placeholder="Enter name"
              className="pa2 w-100 br3 b--light-purple input"
              value={name}
              onChange={handleNameChange}
            />
            {}
            </div>
          </div>
          {/* Pass the name state to the ContactAvatar component */}
          <div className="block-element ph3">
            <p className="paragraph">Phone</p>
            <input type="text" 
            className="w-100 pa2 br3 b--light-purple input"
            value={num}
            onChange={handleNumInput}/>
          </div>
          <div className="ph3">
            <p className="paragraph">Work</p>
            <input 
            type="text" 
            className="w-100 pa2 br3 b--light-purple input"
            onChange={handleNumInput2}/>
          </div>
          <div className="ph3">
            <p className="paragraph">Address</p>
            <input type="email" className="w-100 pa2 br3 b--light-purple input" />
          </div>
          <button type="submit" className="br3 ph4 pv2 mt5 b--light-purple bg-lightest-blue">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
