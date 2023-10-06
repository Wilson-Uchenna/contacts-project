import React from "react";
import Contact from "./components/contact/contact";


const ContactList =( {contacts, click, color } ) => {
    console.log(contacts)
    return(
        <div>
            <h3 className="ma2">☎️ All contacts({contacts.length})</h3>
            {contacts.map((user, i) => {
                return (
                    <Contact
            key={i}
            id={contacts[i].id}
            name={contacts[i].name}
            click={()=> click(contacts[i].id)}
            color={contacts[i].color}
            />
                )
            })}
        </div>
    )
}

export default ContactList