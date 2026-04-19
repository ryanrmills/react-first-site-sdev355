import React from "react";
import "./ContentSection.css";

function ContentSection({ title, intro, children }) {
  return (
    <section className="content-section">
      <div className="content-section__header">
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
      {children}
    </section>
  );
}

export default ContentSection;
