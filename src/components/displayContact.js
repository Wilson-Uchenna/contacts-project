import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactAvatar from "./contact/contactAvatar";

const DisplayContact = () => {
    const navigate = useNavigate()
    const location = useLocation();
  const { name, num, num2, id } = location.state || {};
    const navToHome = ()=> {
        navigate('/', {
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
                <p onClick={navToHome}>
                        <FontAwesomeIcon icon={faChevronLeft} /> Contacts
                </p>
             </div>
            <div className="flex justify-center">
                    <div className="">
                        <ContactAvatar name={name} className='display-avatar'/>
                        <p className="tc">{name}</p>
                    </div>
                    
            </div>
            <div className="flex items-center justify-center">
                <button className="w-50 pv2  mr2 br3 bg-lightest-blue outline-0 bw-0 b--transparent"><FontAwesomeIcon icon={faEnvelope}/> Message</button>
                <button className="w-50 pv2  br3 bg-washed-red outline-0 bw-0 b--transparent"><FontAwesomeIcon icon={faPhone}/> Call</button>
            </div>
            <div>
                <div>
                    <p className="me0">Phone</p>
                    <p className="light-purple me-0">{num}</p>
                </div>
                <div>
                    <p>Work</p>
                    <p className="light-purple">{num2}</p>
                </div>
                <div>Address</div>

            </div>
           
        </div>
    )
}

export default DisplayContact