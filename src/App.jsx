import { useState } from 'react';
import './App.css';
import tshirt from './photos/css2023_tshirt.jpg';
import tshirtOne from './photos/js2021_tshirt.png';
import tshirtTwo from './photos/react2023_tshirt.png';

function App() {
  const [countCss, setCountCss] = useState(0);
  const [countJs, setCountJs] = useState(0);
  const [countReact, setCountReact] = useState(0);
  return (
    <>
      <h1>T-Shirt Shop</h1>
      <main>
        <section id="tshirt-css">
          <img src={tshirt} alt="css" />
          <span className="preis">€ 24.99</span>
          <p>
            <button
              onClick={() => setCountCss((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              -
            </button>
            <span>{countCss}</span>
            <span>{(countCss * 24.99).toFixed(2)}</span>
            <button onClick={() => setCountCss((prev) => prev + 1)}>+</button>
          </p>
        </section>

        <section id="tshirt-js">
          <img src={tshirtOne} alt="JS" />
          <span className="preis">€ 29.99</span>
          <p>
            <button
              onClick={() => setCountJs((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              -
            </button>
            <span>{countJs}</span>
            <span>{(countJs * 29.99).toFixed(2)}</span>
            <button onClick={() => setCountJs((prev) => prev + 1)}>+</button>
          </p>
        </section>

        <section id="tshirt-react">
          <img src={tshirtTwo} alt="React" />
          <span className="preis">€ 34.99</span>
          <p>
            <button
              onClick={() => setCountReact((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              -
            </button>
            <span>{countReact}</span>
            <span>{(countReact * 34.99).toFixed(2)}</span>
            <button onClick={() => setCountReact((prev) => prev + 1)}>+</button>
          </p>
        </section>
      </main>

      <footer>
        {(countCss * 24.99 + countJs * 29.99 + countReact * 34.99).toFixed(2)}
      </footer>
    </>
  );
}

export default App;