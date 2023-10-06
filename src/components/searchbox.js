import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBox = ({searchChange}) => {
return (
    <div>
        <div className="pv1 ph3 mh3 ba b--purple br4 bg-white">
            <div className="pa2 flex items-center">
            <FontAwesomeIcon icon={faSearch} style={{ color: '#69636e'}}/>
            <input 
            type="search" 
            placeholder="Search for contact" 
            className="w-75 mw-75 mh2 ba b--black-05"
            onChange={e => {(searchChange(e.target.value))}}
            />   
            </div>
        
        </div>
        
    </div>
)
}

export default SearchBox