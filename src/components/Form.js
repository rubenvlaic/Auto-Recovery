import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <p>Formular de contact:</p>
        <label>Nume</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Numar de telefon</label>
        <input type="tel"></input>
        <label>Detalii</label>
        <textarea
          rows="6"
          placeholder="Scrie detalii despre serviciul dorit aici"
        />
        <button className="btn">Trimite</button>
      </form>
    </div>
  );
};

export default Form;
