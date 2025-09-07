import React from "react";
import { Link } from "react-router-dom";  // 👈 būtinai pridėti
import "./Sections.css";

const sections = [
  { title: "Rainbow Room", image: "/images/pink.jpg", path: "/pink" },
  { title: "Street Beat", image: "/images/pink.jpg", path: "/dark" },
  { title: "Zen Space", image: "/images/pink.jpg", path: "/nature" },
  { title: "Sugar & Shine", image: "/images/pink.jpg", path: "/tech" },
  { title: "Dark Chamber", image: "/images/pink.jpg", path: "/minimal" },
  { title: "Boho Vibes", image: "/images/pink.jpg", path: "/retro" },
];

const Sections = () => {
  return (
    <div className="sections-container">
      {sections.map((section, index) => (
        <Link to={section.path} key={index} className="section-card">
          <img src={section.image} alt={section.title} />
          <div className="section-title">{section.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sections;