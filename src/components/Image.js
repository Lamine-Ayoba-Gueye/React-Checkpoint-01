import React from 'react';

const prenom = ""; 
function Image({ imageUrl, name }) {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ maxWidth: '300px', marginTop: '20px' }}
      />
      <p>{prenom ? `Bonjour, ${prenom}` : 'Bonjour !'}</p>
    </div>
  );
}

export default Image;
