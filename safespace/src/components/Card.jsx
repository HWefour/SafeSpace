

import React from 'react';
import "../components/Card.css";




export default function Card ({ name, title, imgsrc }) {
    return (
      <div className="card">
        <img src={imgsrc} alt={name} className="dev-img" />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    );
  };
  
  