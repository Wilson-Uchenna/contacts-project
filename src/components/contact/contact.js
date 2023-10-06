import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactAvatar from "./contactAvatar";

const Contact = ({id, name, click, color}) => {
    return (
        <div className="flex items-center justify-between mh3 mv2">
            <div className="">
                <ContactAvatar name={name}/>
            </div>
            <div className="mr-auto ph2 w-50">
                <p>{name}</p>
            </div>
            <div className="flex items-center justify-between w-25">
                <div className="link">
                    <FontAwesomeIcon 
                    icon={faStar} 
                    style={{color: color}}
                    onClick={click}/>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faPhone} style={{color: 'gray'}}/>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faEnvelope} style={{color: 'gray'}}/>
                </div>
            </div>
        </div>
    )
}

export default Contact