import React from "react";

const ContactAvatar = ({name, className}) => {

    const firstLetter = name.charAt(0).toUpperCase()
    const defaultStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#3498db',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      color: 'white'
    }
    const avatarStyle = 
      className === 'larger-avatar' ? {
        ...defaultStyle,
        width: '70px',
        height: '70px',
        borderRadius: '35%',
        fontSize: '40px'
      }
      : className === 'display-avatar' ? {
        ...defaultStyle,
        width: '80px',
        maxWidth: '100%',
        height : '80px',
        borderRadius: '25%',
        fontSize: '50px'
      }
      : defaultStyle
    return (
        <div
      className="avatar" style={avatarStyle}>
      {firstLetter}</div>
    )
}

export default ContactAvatar