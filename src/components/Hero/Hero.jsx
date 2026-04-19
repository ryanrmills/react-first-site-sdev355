import React from "react";
import "./Hero.css";

function Hero({ title, subtitle, imageUrl, imageAlt }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">Featured Topic</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="hero__image-wrap">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
}

export default Hero;
