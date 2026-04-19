import React from "react";
import "./Footer.css";

function Footer({ names }) {
  return (
    <footer className="site-footer">
      <p>{names}</p>
    </footer>
  );
}

export default Footer;
