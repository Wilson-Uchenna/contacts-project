import React from "react";
import ContactAvatar from "../contact/contactAvatar";

const Favorites = ({id, name}) => {
    const firstName = name.split(' ')[0]
    return (
        <div className="br3 shadow-1 pa1 tc">
            <div>
                <ContactAvatar name={name}/>
            </div>
            <div>
                <p>{firstName}</p>
            </div>
        </div>
    )
}

export default Favorites