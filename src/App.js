import React, { useState } from "react";
import "./styles.css";

var flagdictionary = {
  "🏁": "Chequered",
  "🚩": "Triangular",
  "🎌": "Crossed",
  "🏴": "Black",
  "🏳️": "White",
  "🌈": "Rainbow",
  "⚧️": "Transgender",
  "🏴‍☠️": "Pirate",
  "🇦🇹": "Austria",
  " 🇧🇪": "Belgium",
  "🇨🇦": "Canada",
  "🇨🇺": "Cuba",
  "🇩🇪": "Germany",
  "🇩🇲": "Dominica",
  "🇦🇫": "Afghanistan",
  "🇫🇯": "Fiji",
  "🇬🇪": "georgia",
  "🇭🇺": "Hungary",
  "🇮🇳": "India",
  "🇱🇰": "Sri Lanka",
  "🇰🇵": "North Korea"
};

var flagsweknow = Object.keys(flagdictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flaginputhandler(event) {
    var userInput = event.target.value;

    var meaning = flagdictionary[userInput];

    if (meaning === undefined) {
      meaning = "not available";
    }
    setMeaning(meaning);
  }

  function flagclickhandler(flag) {
    var meaning = flagdictionary[flag];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 className="h1">🎌 FLAGS 🎌</h1>
      <img className="picture" src="/image/flags-collage.jpg" />

      <input
        placeholder="place your flag emoji here"
        className="input"
        onChange={flaginputhandler}
      />

      <h2>{meaning}</h2>
      <h4>Click the flags mentioned below and get its name 👇🏻 </h4>
      {flagsweknow.map(function (flag) {
        return (
          <span
            onClick={() => flagclickhandler(flag)}
            style={{ padding: "1.5rem", cursor: "pointer", fontSize: "2.5rem" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
