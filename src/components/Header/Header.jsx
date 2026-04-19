import React from "react";
import "./Header.css";

function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <p className="site-header__eyebrow">React Learning Project</p>
        <h1>{title}</h1>
        <p className="site-header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
