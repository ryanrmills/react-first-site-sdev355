import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ContentSection from "./components/ContentSection/ContentSection.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {
  heroContent,
  trailCards,
  gearCards,
  weeklyPlanItems,
} from "./data/siteContent.js";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="app-shell">
      <Header
        title={heroContent.title}
        subtitle="Plan better hikes. Pack smarter. Enjoy more of the trail."
      />

      <main className="app-main">
        <Hero
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          imageUrl={heroContent.imageUrl}
          imageAlt={heroContent.imageAlt}
        />

        <ContentSection
          title="Section 1: Beginner-Friendly Trails"
          intro="Three approachable hikes with strong scenery returns."
        >
          <div className="cards-grid">
            {trailCards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                detail={card.detail}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          title="Section 2: Essential Gear Picks"
          intro="Six items cover comfort, hydration, and basic safety."
        >
          <div className="cards-grid">
            {gearCards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                detail={card.detail}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          title="Section 3: Weekly Hike Prep Routine"
          intro="Use this four-step rhythm to build consistency."
        >
          <ul className="plan-list">
            {weeklyPlanItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentSection>
      </main>

      <Footer names="Ryan Mills" />
    </div>
  );
}

export default App;
