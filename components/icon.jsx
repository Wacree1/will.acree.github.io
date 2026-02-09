import React from 'react';
import icon_img from '../assets/icon_img.png'

function Icon() {
  const iconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundImage: `url(${icon_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
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
