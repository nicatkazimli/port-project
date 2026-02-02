import { useState } from "react";
import "./Home.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "Research & UX Strategy",
      description:
        "Conducting user research and creating a clear UX strategy to ensure design decisions align with user needs and business goals."
    },
    {
      title: "Wireframes & Prototypes",
      description:
        "Building interactive wireframes and prototypes to visualize the user journey and test interface concepts before final development."
    },
    {
      title: "Final UI Designs",
      description:
        "Designing polished, high-fidelity user interfaces that are visually appealing, accessible, and ready for implementation."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="text-side">
          <h1>Günel Mammadova</h1>
          <h2>UX/UI Designer & Digital Creator</h2>
          <p>
            I craft stunning digital experiences for web & mobile. Portfolio curated for
            international university applications and clients.
          </p>

          <div className="features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="feature-title"
                  onClick={() => toggleAccordion(index)}
                >
                  {feature.title}
                  <span
                    className={`arrow ${activeIndex === index ? "open" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="feature-description">{feature.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="visual-side">
          <div className="mockup-laptop">
            <img src="/gnlll.png" alt="Günel Mammadova Portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
