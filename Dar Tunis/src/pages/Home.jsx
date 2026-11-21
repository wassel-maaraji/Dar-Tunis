import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-top-bar">
          <div className="hero-brand">
            <span className="hero-brand-icon">✦</span>
            <div>
              <p className="hero-brand-title">Dar Tunis</p>
              <span className="hero-brand-sub">Bistro &amp; Cuisine</span>
            </div>
          </div>

          
        </div>

        <div className="hero-center-frame">
          <div className="hero-signboard">
            <h1 className="hero-script-title">Dar Tunis</h1>
            <p className="hero-main-heading">RESTAURANT</p>
            <p className="hero-tagline">
              Authentic Tunisian flavors, warm hospitality, and timeless craft
            </p>
            <div className="hero-actions">
              <Link to="/dishes" className="hero-btn-primary">
                Explore Menu
              </Link>
              <Link to="/contact" className="hero-btn-secondary">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-footer-credit">
          <span>Tunis, Tunisia</span>
        </div>
      </div>
    </section>
  );
}

export default Home;