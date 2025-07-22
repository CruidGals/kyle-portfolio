
import { Container, Row } from "react-bootstrap"
import { FadeUpH1, FadeUpUl } from "./components/Constants";

const experiences = [
  { id: 1, 
    title: 'The Pennsylvania State University', 
    subtitle: 'Research Internship | May 2025 - Present',
    points: [
      "Explored balance prediction in humanoid robotics through ego-centric vision under Dr. Yanxi Liu.",
      "Simulated 1000+ scenarios at once inside a Isaac Lab to efficiently train a actor-critic policy under the PPO algorithm.",
      "Successfully transferred and replicated results onto the real world."
    ]},
  { id: 2, 
    title: 'Laboratory for Perception, Action, and Cognition', 
    subtitle: 'Undergraduate Researcher | February 2025 - Present',
    points: [
      "Procured ego-centric motion capture data using Vicon Motion Capture tools under Dr. Yanxi Liu.",
      "Processed motion capture data through transformer networks to predict foot pressure and foot contact in balanced poses.",
      "Led the development of the new lab website, personally developing nearly 50% of its pages."
    ]},
  { id: 3, 
    title: 'Temple University', 
    subtitle: 'Summer Research Assistant | June 2023 - August 2023',
    points: [
      "Researched Graph Neural Networks to boost node connection prediction accuracy by 10% under Dr. Hongchang Gao.",
      "Utilized the PyTorch API on Google Colab to implement and tune optimized neural networks"
    ]},
];

const Experience = () => {
  return (
    <section id="experience" className="p-5 d-flex flex-column justify-content-center align-items-center">

      <FadeUpH1 className="section-title">EXPERIENCE</FadeUpH1>

      <Container>
        <Row className="experience-list">
          <FadeUpUl className="timeline">
            {experiences.map( (experience) => (
                <li key={experience.id} className="d-flex">
                  <div className="experience-bullet d-flex align-items-center">
                    <div className="company-bullet-wrapper">
                      <div className="company-bullet"></div>
                    </div>
                      
                    <div className="d-flex flex-column">
                      <h2 className="experience-title">{experience.title}</h2>
                      <em className="experience-subtitle">{experience.subtitle}</em>
                      <ul className="experience-desc">
                        {experience.points?.map( ( point ) => (
                          <li>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </FadeUpUl>
        </Row>
      </Container>
    </section>
  )
}

export default Experience