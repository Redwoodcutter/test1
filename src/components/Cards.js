import React from "react";
import './Cards.css';
import { Container, Row, Col } from 'react-bootstrap';

const cardsData = [
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "Adflow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["SEO", "Performance Marketing", "Digital Media Planning"]
  },
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "Marketify",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["PPC", "SEO", "Data & Analytics"]
  },
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "AdVance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["Ecommerce Marketing", "Lead Generation", "Data & Analytics"]
  },
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "Brandlift",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["SEO", "CRO", "PPC"]
  },
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "WebWorks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["SEO", "Design", "Coding"]
  },
  {
    logo: "https://via.placeholder.com/100x50",
    link: "#", // Logonun linki
    title: "MediaPulse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    tags: ["PPC", "Data & Analytics", "SEO"]
  },
];

const Cards = () => {
    return (
      <div className="cards-section"> {/* Arka planı burada uyguluyoruz */}
        <Container>
          <Row className="card-container">
            {cardsData.map((card, index) => (
              <Col md={4} className="mb-4 d-flex" key={index}>
                <div className="card p-3">
                  <a href={card.link}>
                    <img src={card.logo} alt={`${card.title} logo`} className="card-logo mb-3" />
                  </a>
                  <p className="card-description">{card.description}</p>
                  <div className="card-tags">
                    {card.tags.map((tag, idx) => (
                      <span key={idx} className="card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };
export default Cards;
