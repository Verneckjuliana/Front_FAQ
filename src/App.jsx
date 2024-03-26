import React from "react";
import "./styles.css";
import Faixa from "./img/Barra1.jpg";
import Logo from "./img/logo.png";

function App() {
  return (
    <div>
      <div className="navbar">
        <img className="faixa" src={Faixa} alt="faixa bosch" />
        <img className="logo" src={Logo} alt="logo bosch" />
      </div>

      <div>
        <h1 className="title">Divisiones</h1>
        <section className="box">
          <div className="box1">
            <div>
              <h1 className="title2">HC</h1>
              <h2 className="subtitle">Home Comfort</h2>
            </div>
          </div>
          <div className="box1">
            <div>
              <h1 className="title2">PT</h1>
              <h2 className="subtitle">Power Tools</h2>
            </div>
          </div>
        </section>
      </div>

      <div className="footer">
        <img className="faixa2" src={Faixa} alt="faixa bosch" />
      </div>
    </div>
  );
}

export default App;
