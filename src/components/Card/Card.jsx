import React from "react";
import "./Card.css";

function Card({ title, description, detail, imageUrl, imageAlt }) {
  return (
    <article className="card">
      <img className="card__image" src={imageUrl} alt={imageAlt} />
      <div className="card__body">
        <h4>{title}</h4>
        <p>{description}</p>
        <p className="card__detail">{detail}</p>
      </div>
    </article>
  );
}

export default Card;
