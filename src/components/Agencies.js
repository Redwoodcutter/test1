import React from "react";

const agencies = [
  {
    name: "Adgrey",
    description:
      "Adgrey is a marketing agency focused on digital transformation, offering integrated marketing services including SEO, Web Analytics &...",
    tags: "SEO | Performance Marketing | Digital Media Planning",
    logo: "/path-to-adgrey-logo.png",
  },
  {
    name: "Boosmart",
    description:
      "Boosmart expertly manages high-impact, technology-driven marketing processes across diverse sectors, including e-commerce, retail...",
    tags: "PPC | SEO | Data & Analytics",
    logo: "/path-to-boosmart-logo.png",
  },
  {
    name: "Boostroas",
    description:
      "BoostRoas is the Digital Marketing Agency of Turkey's Leading Companies...",
    tags: "E-commerce Marketing | Lead Generation | Data & Analytics",
    logo: "/path-to-boostroas-logo.png",
  },
];

const Agencies = () => {
  return (
    <section className="agencies">
      {agencies.map((agency, index) => (
        <div className="agency-card" key={index}>
          <img src={agency.logo} alt={agency.name} />
          <h3>{agency.name}</h3>
          <p>{agency.description}</p>
          <span className="tags">{agency.tags}</span>
        </div>
      ))}
    </section>
  );
};

export default Agencies;
