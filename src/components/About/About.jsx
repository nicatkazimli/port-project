import { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [showSection, setShowSection] = useState(false);
  const [skillValues, setSkillValues] = useState(Array(6).fill(0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSection(true);

            // Animate skill percentages
            const targetValues = [90, 85, 95, 80, 100, 88];
            targetValues.forEach((val, i) => {
              let start = 0;
              const interval = setInterval(() => {
                start += 1;
                setSkillValues((prev) => {
                  const newValues = [...prev];
                  newValues[i] = start;
                  return newValues;
                });
                if (start >= val) clearInterval(interval);
              }, 12);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".about-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    "User Research",
    "Wireframing",
    "UI Design",
    "Interaction Design",
    "Responsive Design",
    "Figma / Adobe XD",
  ];

  const features = [
    { title: "Project Mgmt" },
    { title: "Team Collab" },
    { title: "Design Thinking" },
    { title: "Prototyping Tools" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-content">

        {/* Left side skills + bio */}
        <div className="left-side">
          <h2>Günel Mammadova</h2>
          <p className="about-text">
            Hi, I'm Günel Mammadova. I was born in Baku in 1998. I specialize in UX/UI design, focusing on creating intuitive and visually engaging digital experiences. I enjoy conducting user research and turning insights into wireframes and prototypes. My goal is to make every interface both beautiful and easy to use. Design is not just my career, it's my passion, and I strive to bring creativity to every project I work on.
          </p>

          <div className="skills-cards">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`skill-card ${
                  i < 3 ? "top-to-bottom" : "bottom-to-top"
                } ${showSection ? "section-show" : ""}`}
              >
                <div className="skill-square">
                  <div
                    className="skill-bg-fill"
                    style={{ width: `${skillValues[i]}%` }}
                  ></div>
                  <div className="skill-info">
                    <h4>{skill}</h4>
                    <span>{skillValues[i]}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side features */}
        <div className="right-side">
          <div className="features-grid">
            {features.map((feat, index) => (
              <div
                key={index}
                className={`feature-card ${
                  index % 2 === 0 ? "left-to-right" : "right-to-left"
                } ${showSection ? "section-show" : ""}`}
              >
                <div className="feature-square feature-bg-animate">
                  <div className="feature-info">
                    <h4>{feat.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
