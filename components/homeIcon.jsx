import React from 'react';
import icon_img from '../assets/icon_img.png'

function Icon() {
  const iconStyle = {
    width: '250px',
    height: '300px',
    borderRadius: '50%',
    borderColor: 'gray',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundImage: `url(${icon_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <div style={iconStyle} aria-label="Website Icon" />
  );
}

export default Icon;
