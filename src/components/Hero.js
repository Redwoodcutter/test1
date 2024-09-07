import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Büyük bokeh efektleri */}
      <div className="bokeh-effect bokeh1"></div>
      <div className="bokeh-effect bokeh2"></div>
      <div className="bokeh-effect bokeh3"></div>
      
      {/* Küçük bokeh efektleri */}
      <div className="small-bokeh small-bokeh1"></div>
      <div className="small-bokeh small-bokeh2"></div>
      <div className="small-bokeh small-bokeh3"></div>


      <div className="hero-content">
        <h1>
          Partner with <span className="highlight">Top-Tier Agencies</span>
        </h1>
        <p className="hero-description">
          We've cultivated a top-tier network of expert and agency partners. Partner with them to unleash the potential of your data.
        </p>
        <button className="hero-button">Become a Partner</button>
      </div>
    </section>
  );
};

export default Hero;
