import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [number, setNumber] = useState(0);
  const [parags, setParags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (number <= 0) {
      amount = 1;
    }
    if (number > 8) {
      amount = 8;
    }
    setParags(data.slice(0, amount));
  };

  return (
    <section className="App">
      <h2>Tired of boring lorem ipsum?</h2>
      <form>
        <div className="form-control">
          <label htmlFor="numOF">Paragraphs: </label>
          <input
            type="number"
            id="numOf"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Generate
          </button>
        </div>
      </form>

      {parags.map((parag, index) => {
        return (
          <div key={index} className="parag">
            <p>{parag}</p>
          </div>
        );
      })}
    </section>
  );
}

export default App;
