import './App.css';
import product from './product.js';

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import Prenom from './components/Prenom.js';

// import ImgCredit from './creditpersonnephy.jpeg';
const prenom='Mame Faye';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Prix: {product.price}€</p>
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '300px', marginTop: '20px' }} /> */}
          {/* <img src={ImgCredit} alt={product.name} style={{ maxWidth: '300px', marginTop: '20px' }} /> */}

          <Name name={product.name} />
          <Description description={product.description} />
          <Price price={product.price} />
          <Image imageUrl={product.imageUrl} name={product.name} />
          <Prenom prenom={prenom}/>

        </div>

      </header>
    </div>
  )
}

export default App;
