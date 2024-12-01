import React from 'react';

// Déclaration de la variable prénom (vous pouvez la modifier ou la laisser vide)
const prenom = ""; // Mettez votre prénom ici si vous le souhaitez

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