import { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "University Platform UX",
    desc: "UX research and interface design for a university digital system.",
    img: "/project1.jpg",
  },
  {
    title: "Mobile App Case Study",
    desc: "User-centered mobile app with usability testing.",
    img: "/project2.jpg",
  },
  {
    title: "Personal Portfolio Concept",
    desc: "Minimal portfolio focused on storytelling and UX clarity.",
    img: "/project3.jpg",
  },
  {
    title: "E-learning Dashboard",
    desc: "Dashboard UX for online education platforms.",
    img: "/project4.jpg",
  },
  {
    title: "Healthcare App UX",
    desc: "Accessible healthcare interface design.",
    img: "/project5.jpg",
  },
  {
    title: "Travel App UI",
    desc: "Mobile-first travel experience.",
    img: "/project6.jpg",
  },
  {
    title: "Finance App Redesign",
    desc: "Trust-focused financial UX redesign.",
    img: "/project7.jpg",
  },
  {
    title: "Smart Home Interface",
    desc: "Interaction design for smart devices.",
    img: "/project8.jpg",
  },
  {
    title: "SaaS Product UX",
    desc: "Enterprise SaaS UX architecture.",
    img: "/project9.jpg",
  },
  {
    title: "Design System Project",
    desc: "Scalable UI design system.",
    img: "/project10.jpg",
  },
];

export default function Portfolio() {
  const featured = projects.slice(0, 3);
  const accordion = projects.slice(3);

  const [activeSlide, setActiveSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="portfolio" className="section portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>

      <div className="portfolio-layout">

        {/* SOL – ACCORDION */}
        <div className="portfolio-left">
          {accordion.map((p, i) => (
            <div className="accordion-item" key={i}>
              <div
                className="accordion-header"
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                <span>{p.title}</span>
                <span className={`arrow ${openIndex === i ? "open" : ""}`}>
                  ▼
                </span>
              </div>

              {openIndex === i && (
                <div className="accordion-content">
                  <img src={p.img} alt={p.title} />
                  <p>{p.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SAĞ – 3D SLIDER */}
        <div className="portfolio-right">
          <div className="slider">
            {featured.map((p, i) => {
              let pos =
                i === activeSlide
                  ? "active"
                  : i === (activeSlide + 1) % featured.length
                  ? "right"
                  : "left";

              return (
                <div key={i} className={`slide ${pos}`}>
                  <div className="slide-card">
                    <img src={p.img} alt={p.title} />
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="slider-controls">
            <button onClick={() =>
              setActiveSlide(
                activeSlide === 0 ? featured.length - 1 : activeSlide - 1
              )
            }>‹</button>

            <button onClick={() =>
              setActiveSlide((activeSlide + 1) % featured.length)
            }>›</button>
          </div>
        </div>

      </div>
    </section>
  );
}
